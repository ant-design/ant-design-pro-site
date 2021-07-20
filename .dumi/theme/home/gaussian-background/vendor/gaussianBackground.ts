import { stackBlurCanvasRGB } from './stackBlur';

class GaussianBackground {
  context = null;

  animationFrame = null;

  timestep = 0;

  firstCallTime = 0;

  lastCallTime = 0;

  timeElapsed = 0;

  fpsAverage = 0;

  fpsTotal = 0;

  layers = {};

  options = {
    blurRadius: 16,
    fpsCap: 120,
    renderWidth: 64,
    renderHeight: 32,
  };

  run(id, layers, blurRadius) {
    // @ts-ignore
    this.context = document.getElementById(id)?.getContext('2d');
    if (!this.context) {
      console.log('ERROR: Could not load canvas');
      return;
    }

    this.updateOptions(blurRadius);
    this.updateLayers(layers);

    this.context.canvas.width = this.options.renderWidth;
    this.context.canvas.height = this.options.renderHeight;

    this.firstCallTime = Date.now();
    this.lastCallTime = this.firstCallTime;

    window.cancelAnimationFrame(this.animationFrame);
    this.animationFrame = window.requestAnimationFrame(this.displayLoop.bind(this));
  }

  generateLayer(orbs, radius, maxVelocity, color, splitX, splitY) {
    const canvas = document.createElement('canvas');

    canvas.width = this.options.renderWidth;
    canvas.height = this.options.renderHeight;

    const layer = {
      orbs: {},
      color,
      context: canvas.getContext('2d'),
    };

    let columnIndex = 0;
    let rowIndex = 0;

    for (let i = 0; i < orbs; i++) {
      let minX;
      let maxX;
      let minY;
      let maxY;
      if (splitX) {
        minX = (this.options.renderWidth / splitX) * columnIndex;
        maxX = (this.options.renderWidth / splitX) * (columnIndex + 1);
        minY = 0;
        maxY = this.options.renderHeight;
        columnIndex++;
      }

      if (splitY) {
        minX = minX || 0;
        maxX = maxX || this.options.renderWidth;
        minY = (this.options.renderHeight / splitY) * rowIndex;
        maxY = (this.options.renderHeight / splitY) * (rowIndex + 1);
      }

      if (columnIndex === splitX) {
        columnIndex = 0;
        rowIndex++;
      }

      if (rowIndex === splitY) {
        rowIndex = 0;
      }

      layer.orbs[i] = {
        radius,
        posX: splitX ? Math.random() * maxX + minX : Math.random() * this.options.renderWidth,
        posY: splitY ? Math.random() * maxY + minY : Math.random() * this.options.renderHeight,
        // Give is a random velocity to make the animation a bit more interesting
        velX: Math.round(Math.random())
          ? Math.random() * maxVelocity
          : -(Math.random() * maxVelocity),
        velY: Math.round(Math.random())
          ? Math.random() * maxVelocity
          : -(Math.random() * maxVelocity),
        // Custom boundaries can be used to create more consistent backgrounds
        minX,
        maxX,
        minY,
        maxY,
      };
    }

    return layer;
  }

  displayLoop() {
    // Keep going if the user wants animation
    this.animationFrame = window.requestAnimationFrame(this.displayLoop.bind(this));

    const currentTime = Date.now();
    const delta = currentTime - this.lastCallTime;

    // Ignore timesteping code if there is no animation
    if (delta > this.timestep) {
      this.lastCallTime = currentTime - (delta % this.timestep);
      this.timeElapsed = this.lastCallTime - this.firstCallTime;

      this.fpsTotal++;
      this.fpsAverage = this.fpsTotal / (this.timeElapsed / 1000);

      this.drawBackground();

      this.drawBlur();
    }
  }

  drawBackground() {
    for (let i = Object.keys(this.layers).length - 1; i >= 0; i--) {
      const layerContext = this.layers[i].context;
      const layerOrbs = this.layers[i].orbs;

      // Draw background
      layerContext.fillStyle = this.layers[i].color;
      layerContext.fillRect(0, 0, this.options.renderWidth, this.options.renderHeight);

      // Draw animated layer elements
      for (let x = Object.keys(layerOrbs).length - 1; x >= 0; x--) {
        // Animate the movement
        layerOrbs[x].posX += layerOrbs[x].velX;
        layerOrbs[x].posY += layerOrbs[x].velY;

        // Check if the orb has custom boundaries
        let minX;
        let maxX;
        let minY;
        let maxY;
        if (layerOrbs[x].maxX && layerOrbs[x].maxY) {
          minX = layerOrbs[x].minX;
          maxX = layerOrbs[x].maxX;

          minY = layerOrbs[x].minY;
          maxY = layerOrbs[x].maxY;
        } else {
          minX = 0;
          maxX = this.options.renderWidth;

          minY = 0;
          maxY = this.options.renderHeight;
        }

        // Collision detection and correction
        if (layerOrbs[x].posX >= maxX) {
          layerOrbs[x].posX = maxX;
          layerOrbs[x].velX = -layerOrbs[x].velX;
        } else if (layerOrbs[x].posX <= minX) {
          layerOrbs[x].posX = minX;
          layerOrbs[x].velX = -layerOrbs[x].velX;
        }

        if (layerOrbs[x].posY >= maxY) {
          layerOrbs[x].posY = maxY;
          layerOrbs[x].velY = -layerOrbs[x].velY;
        } else if (layerOrbs[x].posY <= minY) {
          layerOrbs[x].posY = minY;
          layerOrbs[x].velY = -layerOrbs[x].velY;
        }

        layerContext.save();
        layerContext.globalCompositeOperation = 'destination-out';
        layerContext.beginPath();
        layerContext.arc(
          layerOrbs[x].posX,
          layerOrbs[x].posY,
          layerOrbs[x].radius,
          0,
          2 * Math.PI,
          false,
        );
        layerContext.fill();
        layerContext.restore();
      }

      // Draw the virtual canvas layer onto the main canvas
      this.context.drawImage(layerContext.canvas, 0, 0);
    }
  }

  drawBlur() {
    stackBlurCanvasRGB(
      this.context.canvas.id,
      0,
      0,
      this.options.renderWidth,
      this.options.renderHeight,
      this.options.blurRadius,
    );
  }

  updateLayers(layers) {
    // Empty previous layers
    this.layers = {};
    for (let i = Object.keys(layers).length - 1; i >= 0; i--) {
      this.layers[i] = this.generateLayer(
        layers[i].orbs,
        layers[i].radius,
        layers[i].maxVelocity,
        layers[i].color,
        layers[i].splitX,
        layers[i].splitY,
      );
    }
  }

  updateOptions(blurRadius) {
    this.options.blurRadius = blurRadius;

    // Update rendering options
    this.timestep = 1000.0 / parseFloat(this.options.fpsCap.toString());
    this.context.canvas.width = this.options.renderWidth;
    this.context.canvas.height = this.options.renderHeight;

    // May need a restart if animation was changed
    this.play();
  }

  prototype() {
    window.cancelAnimationFrame(this.animationFrame);
  }

  play() {
    window.cancelAnimationFrame(this.animationFrame);
    this.animationFrame = window.requestAnimationFrame(this.displayLoop.bind(this));
  }
}

export default new GaussianBackground();

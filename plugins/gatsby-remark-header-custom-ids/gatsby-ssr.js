const React = require(`react`);

const pluginDefaults = {
  className: `anchor`,
  icon: true,
  offsetY: 0,
};

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { offsetY } = Object.assign(pluginDefaults, pluginOptions);

  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var offset = element.offsetTop
          // Wait for the browser to finish rendering before scrolling.
          setTimeout((function() {
            window.scrollTo(0, offset - ${offsetY})
          }), 0)
        }
      }
    })
  `;

  return setHeadComponents([
    null,
    <script
      key="gatsby-remark-header-custom-ids-script"
      dangerouslySetInnerHTML={{ __html: script }}
    />,
  ]);
};


const imgMap = {
  a: 'https://gw.alipayobjects.com/zos/rmsportal/ZrkcSjizAKNWwJTwcadT.png',
  b: 'https://gw.alipayobjects.com/zos/rmsportal/KYlwHMeomKQbhJDRUVvt.png',
  c: 'https://gw.alipayobjects.com/zos/rmsportal/gabvleTstEvzkbQRfjxu.png',
  d: 'https://gw.alipayobjects.com/zos/rmsportal/jvpNzacxUYLlNsHTtrAD.png',
};

// refers: https://www.sitepoint.com/get-url-parameters-with-javascript/
function getUrlParams(url) {
  var d = decodeURIComponent;
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function (v) {
        paramNum = v.slice(1, -1);
        return '';
      });
      var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]]);
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue));
        }
        else {
          obj[paramName][paramNum] = d(paramValue);
        }
      }
      else {
        obj[paramName] = d(paramValue);
      }
    }
  }
  return obj;
}

export default {
  getUrlParams,
  imgMap,
}

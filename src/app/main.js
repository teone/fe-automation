(function(){
  console.info('main.js has been loaded');

  console.log('Env: ' + process.env.NODE_ENV);
  $('.environment').text(process.env.NODE_ENV);
})();




const LocalStorageService = (function(){

    var _service;

    function _getService() {
        if(!_service) {
          _service = this;
          return _service
      }   
    }

    function _setToken(data) {
        localStorage.setItem('token_access', data.access);
        localStorage.setItem('token_refresh', data.refresh);
      }

    function _getAccessToken() {
        return localStorage.getItem('token_access');
    }

    function _getRefreshToken() {
        return localStorage.getItem('token_refresh');
    }

    function _clearToken() {
        localStorage.removeItem('token_access');
        localStorage.removeItem('token_refresh');
      }

      return {
        getService : _getService,
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        getRefreshToken : _getRefreshToken,
        clearToken : _clearToken
      }
})();

export default LocalStorageService;
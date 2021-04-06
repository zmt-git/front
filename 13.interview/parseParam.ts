function parseParams (url: string): object {
  let reg = /.+\?(.+)/

  let paramStr: string = reg.exec(url)[1]

  let paramArr = paramStr.split('&')

  let params = {}

  paramArr.forEach(param => {
    if (/=/.test(param)) {
      let [key, val] = param.split('=')

      val = encodeURIComponent(val)

      let v = /\d+$/.test(val) ? parseFloat(val) : val

      if (params.hasOwnProperty(key)) {
        params[key] = [].concat(params[key], v)
      } else {
        params[key] = v
      }
    } else {
      params[param] = true
    }
  })

  return params
}
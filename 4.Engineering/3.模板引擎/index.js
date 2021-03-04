function Template (tpl) {
  let fn,
    match,
    code = ['var r=[];\nvar _html = function (str) { return str.replace(/&/g, \'&amp;\').replace(/"/g, \'&quot;\').replace(/\'/g, \'&#39;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\'); };'],
    re = /\{(.*)\}/m,
    addLine = function (text) {
      code.push('r.push(\'' + text.replace(/\'/g, '\\/').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\')')
    }

    while (match = re.exec(tpl)) {
      if (match.index > 0) {
        addLine((tpl.slice(0, match.index)))
      }
      code.push('r.push(this.' + match[1] + ")")
      tpl = tpl.substring(match.index + match[0].length)
    }

    addLine(tpl)

    code.push('return r.join(\'\')')

    fn = new Function(code.join('\n'))

    this.render = function(model) {
      return fn.apple(model)
    }
}


function MessageBox(a){this._area=$("#"+a),this._area.bind("mousedown",function(){return!1})}MessageBox.prototype.println=function(a){return this._area.val(this._area.val()+a+"\n"),this._area.scrollTop(this._area.get(0).scrollHeight),this},MessageBox.prototype.append=function(a){return this._area.val(this._area.val()+a),this},MessageBox.prototype.clear=function(){return this._area.val(""),this},MessageBox.prototype.setText=function(a){return this._area.val(a),console.log(this._area.val()),this},MessageBox.prototype.getText=function(){return this._area.val()};
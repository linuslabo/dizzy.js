define(function(){var b=function(a){this.transformationMatrix=a};b.prototype={matrix:function(a){if(a!==void 0)this.transformationMatrix=a;else return this.transformationMatrix},rotate:function(a,c,b){arguments.length<3&&(b=c=0);this.matrix(this.matrix().translate(c,b).rotate(a).translate(-c,-b));return this},scale:function(a){this.matrix(this.matrix().scale(a));return this},translate:function(a,b){this.matrix(this.matrix().translate(a,b));return this},inverse:function(){this.matrix(this.matrix().inverse());
return this},multiply:function(a){a=a.transformationMatrix||a;this.matrix(this.matrix().multiply(a));return this},toString:function(){return"matrix("+this.toArray().join(", ")+")"},toArray:function(){var a=this.matrix();return[a.a,a.b,a.c,a.d,a.e,a.f]}};b.createTransform=function(a){a.dom&&a.transformation&&(a=a.transformation());if(a.transformationMatrix)a=a.transformationMatrix;a.getCTM&&(a=a.getCTM());if(a.toString().indexOf("SVGMatrix")>=0)return new b(a)};return b});
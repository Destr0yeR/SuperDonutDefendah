
	var ObjectFactory = function() {
		this.groups = {};
		this.game = {};
		this.window = {};
		this.dimension = 0;

		return {
			create: create
		}

		function create(name, x, y) {
			this.game = Constants.game();
			this.window = Constants.window();
			this.dimension = Constants.dimension();

			if(this.groups[name]){
				this.groups[name] = this.game.add.group();
			}

			var _x = x;
			var _y = y;

			if(x === UNDEFINED() && y === UNDEFINED()) {

				var _h = (Math.random() * 2);
				var offset = 0;

				if(_h == 0) {
					_y = Math.random() * (this.window.h + 1);
					_x = 0 - this.dimension;
					var _w = (Math.random() * 2);
					if(_w != 0) _x = this.window.w + 32;
				}
				else {
					_x = Math.random() * (this.window.w + 1);
					_y = 0 - this.dimension;
					var _w = (Math.random() * 2);
					if(_w != 0) _y = this.window.h + 32;
				}
			}

			this.groups[name].create(_x, _y, name);
		}

	}

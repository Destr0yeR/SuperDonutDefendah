	
	var gameSystem = new GameSystem();
	gameSystem.create(800, 600);

	SDD.gameSystem = gameSystem;

	gameSystem.state.add('Init', SDD.Init);
	gameSystem.state.add('Boot', SDD.Boot);
	gameSystem.state.add('Menu', SDD.Menu);
	gameSystem.state.add('HowTo', SDD.HowTo);
	gameSystem.state.add('Game', SDD.Game);
	gameSystem.state.add('GameOver', SDD.GameOver);
	gameSystem.state.add('Credits', SDD.Credits);

	gameSystem.state.load('Init');

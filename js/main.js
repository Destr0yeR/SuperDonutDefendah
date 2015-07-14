	
	var gameSystem = new GameSystem();
	gameSystem.create(800, 600);

	SDD.gameSystem = gameSystem;

	gameSystem.addState('Init', SDD.Init);
	gameSystem.addState('Boot', SDD.Boot);
	gameSystem.addState('Menu', SDD.Menu);
	gameSystem.addState('HowTo', SDD.HowTo);
	gameSystem.addState('Game', SDD.Game);
	gameSystem.addState('GameOver', SDD.GameOver);
	gameSystem.addState('Credits', SDD.Credits);

	gameSystem.loadState('Init');

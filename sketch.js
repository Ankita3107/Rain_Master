  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var rain = [];
  var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r14, r15,
      r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30 

  function setup() {
  var canvas =  createCanvas(700,600);
  engine = Engine.create();
  world = engine.world;

  r1 = new Rain();
  r2 = new Rain();
  r3 = new Rain();
  r4 = new Rain();
  r5 = new Rain();
  r6 = new Rain();
  r7 = new Rain();
  r8 = new Rain();
  r8 = new Rain();
  r9 = new Rain ();
  r10 = new Rain();
  r11 = new Rain();
  r12 = new Rain();
  r13 = new Rain();
  r14 = new Rain();
  r15 = new Rain();
  r16 = new Rain();
  r17 = new Rain ();
  r18 = new Rain();
  r19 = new Rain();
  r20 = new Rain();
  r21 = new Rain();
  r22 = new Rain();
  r23 = new Rain();
  r24 = new Rain();
  r25 = new Rain();
  r26 = new Rain();
  r27 = new Rain();
  r28 = new Rain();
  r29 = new Rain();
  r30 = new Rain();
  r31 = new Rain();
  r32 = new Rain();
  r33 = new Rain();
  r34 = new Rain();
  r35 = new Rain();
  r36 = new Rain();
  r37 = new Rain();
  r38 = new Rain();
  r39 = new Rain();
  r40 = new Rain ();


  }

  function draw() {
    background(179,234,249);  
    Engine.update(engine);

    r1 .display();
    r2 .display();
    r3 .display();
    r4 .display();
    r5 .display();
    r6 .display();
    r7 .display();
    r8 .display();
    r8 .display();
    r9 .display();
    r10 .display();
    r11 .display();
    r12 .display();
    r13 .display();
    r14 .display();
    r15 .display();
    r16 .display();
    r17 .display();
    r18 .display();
    r19 .display();
    r20 .display();
    r21 .display();
    r22 .display();
    r23 .display();
    r24 .display();
    r25 .display();
    r26 .display();
    r27 .display();
    r28 .display();
    r29 .display();
    r30 .display();
    r31 .display();
    r32 .display();
    r33 .display();
    r34 .display();
    r35 .display();
    r36 .display();
    r37 .display();
    r38.display();
    r39 .display();
    r40 .display();

    drawSprites();
  }
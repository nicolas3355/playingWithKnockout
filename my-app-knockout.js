var catsData =[
    {
      name:"cat",
      src:"img/cat.jpeg",
      clicks:0,
      nicknames:['nick1','hu']

    },
    {
      name:"cat2",
      src:"img/cat2.jpeg",
      clicks:0,
      nicknames:['nick2','koko']
    },
    {
      name:"cat3",
      src:"img/cat3.jpeg",
      clicks:0,
      nicknames:['nick3','jiji']
    }
  ];
var cat = function(data){

  this.name=ko.observable(data.name);
  this.src=ko.observable(data.src);
  this.clicks=ko.observable(data.clicks);
  this.nicknames=ko.observableArray(data.nicknames);

  this.catLevel=ko.computed(function(){
    switch (true) {
    case (this.clicks()<10):
      return "infant";
    case (this.clicks()<20):
      return "baby";
    case (this.clicks()<30):
      return "child";
    case(this.clicks()<40):
      return "teen";
    default:
      return "lost count wtf stop clicking";
    }
  },this);
};
var viewModel = function(){
  var self=this;
  this.cats=ko.observableArray();

  catsData.forEach(function(catData){
    self.cats.push(new cat(catData));
  });

  this.currentCat=ko.observable(self.cats()[0]);

  this.incrementCounter=function(){
    self.currentCat().clicks(self.currentCat().clicks()+1);
  }
  this.changeToCurrent=function(){
    self.currentCat(this);
  }
};

ko.applyBindings(new viewModel());

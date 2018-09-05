const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const JourneyStartLocations = this.journeys.map ( journey => journey.startLocation )
  return JourneyStartLocations
};


Traveller.prototype.getJourneyEndLocations = function () {
  const JourneyEndLocations = this.journeys.map ( journey => journey.endLocation )
  return JourneyEndLocations
};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

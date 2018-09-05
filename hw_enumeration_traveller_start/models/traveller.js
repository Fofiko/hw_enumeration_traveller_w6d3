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
  const ModesOfTransport = this.journeys.map ( journey => journey.transport )
  return ModesOfTransport
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const JourneysOfSameTransport = this.journeys.filter ( journey => journey.transport === transport)
  return JourneysOfSameTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

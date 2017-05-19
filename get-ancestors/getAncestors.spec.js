/*global describe, it, expect, jasmine */

describe("GetAncestors", function () {
    var GetAncestors = require("./getAncestors.js");
    var getAncestors = new GetAncestors();

    var expectedName = "Super Mario 64 DS";
    var expectedParents = [{
        id: 'http://www.wikidata.org/entity/Q7889',
        name: 'video game'
    }];

    describe("known Wikidata id without prefix", function () {
        var knownWikidataId = "Q1142888";

        it("returns expected ancestors", function (done) {
            // arrange

            // act
            getAncestors.byId(knownWikidataId, function (result) {

                // assert
                expect(result.name).toEqual("Super Mario 64 DS");
                expect(result.parents[0].name).toEqual("video game");
                expect(result.parents[0].parents[0].name).toEqual("application");
                expect(result.parents[0].parents[1].name).toEqual("electronic game");

                done();
            }, 1);
        });
    });
});
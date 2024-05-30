import {
  calculateGradesAndAverageScience,
  calculateGradesAndAverageLanguages,
  calculateGradesAndAverageRe,
  calculateGradesAndAverage,
} from "./main";

describe("calculateGradesAndAverageScience", () => {
  it("returns ` A ` if the score  70 and above ", () => {
    expect(calculateGradesAndAverageScience(80)).toEqual("A");
  });
  it("returns ` B ` if the score is 60-69", () => {
    expect(calculateGradesAndAverageScience(65)).toEqual("B");
  });
  it("returns ` C ` if the  score is 50 - 59", () => {
    expect(calculateGradesAndAverageScience(57)).toEqual("C");
  });
  it("returns ` PASS ` if the score is 40 - 49", () => {
    expect(calculateGradesAndAverageScience(43)).toEqual("Pass");
  });
  it("returns ` Sup ` if the  score is Below 40", () => {
    expect(calculateGradesAndAverageScience(30)).toEqual("Sup");
  });
});
describe("calculateGradesAndAverageLanguages", () => {
  it("returns ` A ` if the score  75 and above ", () => {
    expect(calculateGradesAndAverageLanguages(80)).toEqual("A");
  });
  it("returns ` B ` if the score is 65-74", () => {
    expect(calculateGradesAndAverageLanguages(69)).toEqual("B");
  });
  it("returns ` C ` if the  score is 55-64", () => {
    expect(calculateGradesAndAverageLanguages(57)).toEqual("C");
  });
  it("returns ` PASS ` if the score is 45-54", () => {
    expect(calculateGradesAndAverageLanguages(47)).toEqual("Pass");
  });
  it("returns ` Sup ` if the  score is Below 45", () => {
    expect(calculateGradesAndAverageLanguages(30)).toEqual("Sup");
  });
});
describe("calculateGradesAndAverageRe", () => {
  it("returns ` A ` if the score  80 and above ", () => {
    expect(calculateGradesAndAverageRe(86)).toEqual("A");
  });
  it("returns ` B ` if the score is 70-79", () => {
    expect(calculateGradesAndAverageRe(75)).toEqual("B");
  });
  it("returns ` C ` if the  score is 60-69", () => {
    expect(calculateGradesAndAverageRe(65)).toEqual("C");
  });
  it("returns ` PASS ` if the score is 50-59", () => {
    expect(calculateGradesAndAverageRe(55)).toEqual("Pass");
  });
  it("returns ` Sup ` if the  score is Below 50", () => {
    expect(calculateGradesAndAverageRe(30)).toEqual("Sup");
  });
});

describe("calculateGradesAndAverage", () => {
  it("returns the average ", () => {
    expect(calculateGradesAndAverage({
      name: "Faith",
      math: 80,
      eng: 65,
      kis: 48,
      phy: 67,
      che: 56,
      re: 89,
      comp: 82,
    })).toEqual({
      name: 'Faith',
      math: 'A',
      eng: 'B',
      kis: 'Pass',
      phy: 'B',
      che: 'C',
      re: 'A',
      comp: 'A'
    }
    )
  })
})

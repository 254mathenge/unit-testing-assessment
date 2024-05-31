let student = {
  name: "name",
  math: " math",
  eng: "eng",
  kis: "kis",
  phy: "phy",
  che: "che",
  re: "re",
  comp: "comp",
};
export function calculateGradesAndAverageScience(science) {
  if (science < 40) {
    return "Sup";
  } else if (science >= 60 && science <= 69) {
    return "B";
  } else if (science >= 50 && science <= 59) {
    return "C";
  } else if (science >= 40 && science <= 49) {
    return "Pass";
  } else {
    return "A";
  }
}
calculateGradesAndAverageScience();

export function calculateGradesAndAverageLanguages(languages) {
  if (languages < 45) {
    return "Sup";
  } else if (languages >= 65 && languages <= 74) {
    return "B";
  } else if (languages >= 55 && languages <= 64) {
    return "C";
  } else if (languages >= 45 && languages <= 54) {
    return "Pass";
  } else {
    return "A";
  }
}
calculateGradesAndAverageLanguages();
export function calculateGradesAndAverageRe(re) {
  if (re < 50) {
    return "Sup";
  } else if (re >= 70 && re <= 79) {
    return "B";
  } else if (re >= 60 && re <= 69) {
    return "C";
  } else if (re >= 50 && re <= 59) {
    return "Pass";
  } else {
    return "A";
  }
}
calculateGradesAndAverageRe();
export function calculateGradesAndAverage() {
  const average =
    (student.kis + student.phy + student.che + student.re + student.comp) / 7;

  student = {
    name: "Faith",
    math: 80,
    eng: 65,
    kis: 48,
    phy: 67,
    che: 56,
    re: 89,
    comp: 82,
  };

  return {
    name: "Faith",
    math: calculateGradesAndAverageScience(student.math),
    eng: calculateGradesAndAverageLanguages(student.eng),
    kis: calculateGradesAndAverageLanguages(student.kis),
    phy: calculateGradesAndAverageScience(student.phy),
    che: calculateGradesAndAverageScience(student.che),
    re: calculateGradesAndAverageRe(student.re),
    comp: calculateGradesAndAverageLanguages(student.comp),
  };
}

console.log(calculateGradesAndAverage());

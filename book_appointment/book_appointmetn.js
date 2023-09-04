function populate(dis, doc) {
  var dis = document.getElementById(dis);
  var doc = document.getElementById(doc);

  doc.innerHTML = "";

  if (dis.value == "respiratory") {
    var optionArray = [
      "|Choose...",
      "john|Dr. John Adam",
      "jim|Dr. Jim Bhati",
      "subash|Dr. Subash Nayar",
    ];
  } else if (dis.value == "digestive") {
    var optionArray = [
      "|Choose...",
      "khalid|Khalid",
      "vipin|Vipin",
      "derek|Derek",
    ];
  } else if (dis.value == "gynaecology") {
    var optionArray = [
      "|Choose...",
      "noor|Dr. Noor Fatima",
      "hadid|Hadid",
      "jukey|Jukey",
    ];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");

    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    doc.options.add(newoption);
  }
}

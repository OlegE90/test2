import "./styles.css";

var data = {
  data: {
    basicURL:
      "https://podusham.online/test?s_recid=277483926&s_charact%3A920452=",
    plussymbol: "%2B",
    problems: [
      {
        id: "1",
        problem: "Агрессия, импульсивность и иные нежелательные эмоции",
        parametradd: "Агрессия%2C+импульсивность+и+иные+нежелательные+эмоции"
      },
      {
        id: "2",
        problem: "Карьерная мотивация и (или) выгорание",
        parametradd: "Карьерная+мотивация+и+%28или%29+выгорание"
      },
      {
        id: "3",
        problem: "Мое физическое состояние",
        parametradd: "Мое+физическое+состояние"
      },
      {
        id: "4",
        problem: "Неуверенность в себе, самооценка",
        parametradd: "Неуверенность+в+себе%2C+самооценка"
      },
      {
        id: "5",
        problem: "Отношения в семье",
        parametradd: "Отношения+в+семье"
      },
      {
        id: "6",
        problem:
          "Отсутствие отношений, сложности в построении отношений или чувство одиночества",
        parametradd:
          "Отсутствие+отношений%2C+сложности+в+построении+отношений+или+чувство+одиночества"
      },
      {
        id: "7",
        problem: "Отсутствие эмоций, непонятные эмоции",
        parametradd: "Отсутствие+эмоций%2C+непонятные+эмоции"
      },
      {
        id: "8",
        problem: "Поиск себя, самоопределение, планы на жизнь",
        parametradd: "Поиск+себя%2C+самоопределение%2C+планы+на+жизнь"
      },
      {
        id: "9",
        problem: "Стресс, подавленность и (или) депрессивные состояния",
        parametradd:
          "Стресс%2C+подавленность+и+%28или%29+депрессивные+состояния"
      },
      {
        id: "10",
        problem: "Тревога, страхи, фобии, навязчивые мысли",
        parametradd: "Тревога%2C+страхи%2C+фобии%2C+навязчивые+мысли"
      },
      {
        id: "11",
        problem: "Трудности в отношениях и конфликты",
        parametradd: "Трудности+в+отношениях+и+конфликты"
      },
      {
        id: "12",
        problem: "Утрата и психологические травмы",
        parametradd: "Утрата+и+психологические+травмы"
      },
      {
        id: "13",
        problem: "Чувство вины",
        parametradd: "Чувство+вины"
      },
      {
        id: "14",
        isSend: false,
        problem: "Чувство вины",
        parametradd: "Чувство+вины"
      },
      {
        id: "15",
        isSend: false,
        problem: "Чувство вины",
        parametradd: "Чувство+вины"
      }
    ]
  }
};

var checkboxBlock = "df432-option";
var stringSeparator = data.data.plussymbol;
var baseUrl = data.data.basicURL;
var checkboxes = getCheckboxHTML(data.data.problems);
var form = document.getElementById("form-options");

function getCheckboxHTML(data) {
  if (!Array.isArray(data)) {
    return;
  }
  var html = "";

  for (var i = 0; i < data.length; i++) {
    var elem = data[i];
    var isSend = typeof elem.isSend === "undefined" ? true : elem.isSend;

    html +=
      '<label class="' +
      checkboxBlock +
      '">' +
      '<input data-id="' +
      elem.id +
      '" data-isSend="' +
      isSend +
      '" type="checkbox" value="' +
      elem.parametradd +
      '" name="options">' +
      elem.problem +
      "</label>";
  }

  return html;
}

function isSendCheck(elem) {
  var isSend = elem.getAttribute("data-isSend");

  return isSend === "true" || false;
}

function getAttributesByCheckbox(separator) {
  var str = [];
  var markedCheckbox = document.querySelectorAll(
    "." + checkboxBlock + ' > [type="checkbox"]:checked'
  );

  for (var i = 0; i < markedCheckbox.length; i++) {
    if (isSendCheck(markedCheckbox[i]) && markedCheckbox[i].checked) {
      str.push(markedCheckbox[i].value);
    }
  }
  return str.join(separator);
}

function handleClickSubmitButton(event) {
  var attributes = getAttributesByCheckbox(stringSeparator);
  var url = baseUrl + attributes;
  window.location.href = url;
  event.preventDefault();
}

form.addEventListener("submit", handleClickSubmitButton);
document.getElementById("df432-options").innerHTML = checkboxes;

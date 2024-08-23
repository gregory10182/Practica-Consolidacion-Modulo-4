$(document).ready(function () {
  const getCharacters = (id) => {
    return fetch(`https://swapi.dev/api/people/${id}/`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  };

  $defaultPopulares = $("#rowPopulares").html();
  $defaultSecundarios = $("#rowSecundarios").html();
  $defaultSignificativos = $("#rowSignificativos").html();

  $("#hoverPopulares").one("mouseenter", () => {
    for (i = 1; i <= 5; i++) {
      getCharacters(i).then((data) => {
        $newCharacter = $(
          `                            
            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" id="populares"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                  <div class="timeline-text">
                      <h6>${data.name}</h6>
                      <p>Estatura: ${data.height} cm | Peso: ${data.mass}</p>
                  </div>
                </div>
              </div>
            </div>
          `
        ).hide();
        $("#rowPopulares").append($newCharacter);
        $newCharacter.fadeIn(1000);
      });
    }
  });

  $("#hoverSecundarios").one("mouseenter", () => {
    for (i = 6; i <= 10; i++) {
      getCharacters(i).then((data) => {
        $newCharacter = $(
          `                            
            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" id="secundarios"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                  <div class="timeline-text">
                      <h6>${data.name}</h6>
                      <p>Estatura: ${data.height} cm | Peso: ${data.mass}</p>
                  </div>
                </div>
              </div>
            </div>
          `
        ).hide();
        $("#rowSecundarios").append($newCharacter);
        $newCharacter.fadeIn(1000);
      });
    }
  });

  $("#hoverSignificativos").one("mouseenter", () => {
    for (i = 11; i <= 15; i++) {
      getCharacters(i).then((data) => {
        $newCharacter = $(
          `                            
            <div class="col-12 col-md-6 col-lg-4">
              <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-icon" id="significativos"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                  <div class="timeline-text">
                      <h6>${data.name}</h6>
                      <p>Estatura: ${data.height} cm | Peso: ${data.mass}</p>
                  </div>
                </div>
              </div>
            </div>
          `
        ).hide();
        $("#rowSignificativos").append($newCharacter);
        $newCharacter.fadeIn(1000);
      });
    }
  });
});

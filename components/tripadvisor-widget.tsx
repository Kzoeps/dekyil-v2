
"use client"

import * as React from "react"

export function TripAdvisorWidget() {
  React.useEffect(() => {
    // This effect will run on the client-side after the component mounts
    const script = document.createElement("script")
    script.src =
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=899&locationId=14552890&lang=en_US&rating=true&nreviews=5&writereviewlink=false&popIdx=false&iswide=false&border=false&display_version=2"
    script.async = true
    script.setAttribute("data-loadtrk", "true")
    script.onload = () => {
      // @ts-expect-error loading the script and type is not defined because its from tripadvisor
      script.loadtrk = true
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Guest Reviews</h2>
      <div id="TA_selfserveprop899" className="TA_selfserveprop flex items-center justify-center ">
        <ul id="G2Lv96q" className="TA_links hNWhCifVCZf">
          <li id="co38Nw8s6" className="2Zqggkvqjfa">
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Hotel_Review-g469426-d14552890-Reviews-Dekyil_Guest_House-Bumthang_Bumthang_District.html"
              rel="noreferrer"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}


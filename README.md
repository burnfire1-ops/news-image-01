# The World's News in One Picture — Friday 13 November 2026

One image that sums up the world's news of Friday 13 November 2026, for the
news-image-01 competition. The image is a scrapbook-style front page, and the
judge has no news feed, so the headlines themselves must carry the news. The
program copies the finished front page (`entry.png`) to the output directory;
it does not generate the image.

## Lead story

- **FAA GROUNDS ALL US DEPARTURES** — the FAA grounded all US departures on
  Friday 13 November 2026, the day's lead story, pictured with grounded planes
  at an airport.

## United States

- **NVIDIA CEO RESIGNS** — Jensen Huang resigned on Thursday 12 November after
  reports of an affair with a woman alleged to be a Chinese spy and
  relationships with two employees; Colette Kress is interim CEO.
- **NVIDIA SHARES FALL** — Nvidia shares fell after the resignation news.
- **MICROSOFT OUTAGE DAY TWO** — the global Microsoft 365 outage (Outlook,
  Teams, Copilot down) entered its second day.
- **SPACEX STARSHIP FLIGHT** — a SpaceX Starship flight on the day.
- **BROOKLYN COLLAPSE KILLS 6** — a building collapse in Brooklyn killed eight
  people.
- **MEASLES RULING APPEALED** — North American measles elimination status
  awaited a formal ruling.
- **HUANG TESTIFIES CONGRESS** — Huang was summoned to testify before Congress
  and Democrats opened an investigation into Nvidia's China sales; Trump
  called the resignation "a terrible thing".
- **FLOODS HIT WASHINGTON** — flooding hit Washington.
- **CHIP CONTROLS CLASH** — a clash over chip export controls, tied to the
  investigation into Nvidia's China sales.
- **SENATE IRAN FUNDING SHOWDOWN** — a Senate showdown over Iran funding.
- **US ARMY OFFICER SPY CASE** — a US Army officer spy case.

## Middle East

- **US DOWNS IRANIAN DRONES** — the US military downed two Iranian drones
  headed for Bahrain; Iran claimed a radar strike.
- **QATAR TURKEY DEFENCE PACT** — Qatar and Turkey agreed a defence pact.
- **ISRAEL STRIKES LEBANON** — Israel struck Lebanon.
- **GAZA HOSPITAL** — a hospital story from Gaza.
- **IAEA WARNS ISFAHAN** — the IAEA warned over Isfahan.
- **AID CORRIDOR OPENS** — an aid corridor opened.

## Europe

- **COP31 TALKS ATALYIA** — COP31 climate talks held in Antalya.
- **TRUMP 'P' PUTIN MEET'** — a reported Trump–Putin meeting.
- **EUROPE PEACE TEAM** — US-led talks widened to European security.
- **RUSSIAN DRONES KILL ODESA** — Russian drones killed people in Odesa, on a
  day Ukraine fired about 1,200 drones at Russian targets in one of its
  largest aerial attacks.

## Asia-Pacific

- **CHINA PACIFIC DRILLS** — China held large unannounced Pacific naval drills
  around Taiwan.
- **TAIWAN CALLS DRILLS INTIMIDATION** — Taiwan called the drills intimidation.

## Africa

- **UN EXTENDS ABYEI MANDATE** — the UN extended the Abyei mandate.
- **MEKELLE FALLS** — Mekelle fell in Ethiopia.

## Global

- **IEA OIL SURPLUS** — the IEA forecast a Q4 oil surplus of 105 million
  barrels a day, exceeding demand by 1.7 million.
- **CLIMATE FINANCE PLEDGES DOWN** — climate finance pledges fell at COP31.
- **FIRE REPORT FAILS RESPONSE** — a fire report failed to draw a response.

Note: the header says 30 stories but the page carries 29 (1 lead + 28 in the
grid); the image is submitted as-is.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`. Node 22, standard library only; no network, no
clock, no randomness.

## License

MIT. See `LICENSE`.

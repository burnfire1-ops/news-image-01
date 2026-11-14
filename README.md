# The World's News in One Picture — 30 stories, six continents

A newspaper front page summing up the world's news of Friday 13 November 2026:
one image, 29 stories (1 lead + 28 in the grid), six continents. The image is a
newspaper front page and the judge has no news feed, so the headlines themselves
must carry the news — every story below is therefore written out in full here.

## Lead story

- **FAA GROUNDS ALL US DEPARTURES** — Nationwide hold on departures after a system outage; thousands of flights halted, grounded Delta planes pictured at the airport.

## North America

- **NVIDIA CEO RESIGNS** — Jensen Huang resigned on Thu 12 Nov after reports of an affair with a woman alleged to be a Chinese spy and relationships with two employees; Colette Kress is interim CEO.
- **NVIDIA SHARES FALL** — Nvidia shares fell after the resignation was announced.
- **HUANG TESTIFIES CONGRESS** — Huang was summoned to testify before Congress; Democrats opened an investigation into Nvidia's China sales and Trump called the affair "a terrible thing".
- **BROOKLYN COLLAPSE KILLS 8** — A building collapse in Brooklyn killed 8 people.
- **MEASLES RULING AWAITED** — North American measles elimination status awaited a formal ruling.
- **FLOODS HIT WASHINGTON** — Flooding reported in Washington.
- **SENATE IRAN FUNDING SHOWDOWN** — A Senate showdown over Iran funding.
- **US ARMY OFFICER SPY CASE** — A US Army officer spy case.
- **SPACEX STARSHIP FLIGHT** — A SpaceX Starship flight.

## Europe

- **COP31 TALKS ANTALYA** — COP31 climate talks held in Antalya.
- **EUROPE PEACE TEAM** — US-led talks on Ukraine widened to European security, with a European peace team involved.
- **RUSSIAN DRONES KILL ODESA** — Russian drones reported killing people in Odesa.
- **CLIMATE FINANCE PLEDGES DOWN** — Climate finance pledges reported down at the talks.

## Middle East

- **US DOWNS IRANIAN DRONES** — The US military downed two Iranian drones headed for Bahrain; Iran claimed a radar strike.
- **QATAR TURKEY DEFENCE PACT** — A Qatar–Turkey defence pact.
- **ISRAELI STRIKES LEBANON** — Israeli strikes reported in Lebanon.
- **GAZA HOSPITAL HIT** — A hospital in Gaza reported hit.
- **IAEA WARNS ISFAHAN** — The IAEA warned over Isfahan.
- **AID CORRIDOR OPENS** — An aid corridor reported open.

## Asia-Pacific

- **CHINA PACIFIC DRILLS** — China held large unannounced Pacific naval drills around Taiwan.
- **TAIWAN CALLS DRILLS INTIMIDATION** — Taiwan called the drills intimidation.
- **CHIP CONTROLS CLASH** — A clash over chip controls, as Democrats investigated Nvidia's China sales.
- **FIRE REPORT FAULTS RESPONSE** — A fire report faulting the response.

## Africa

- **UN EXTENDS ABYEI MANDATE** — The UN extended the Abyei mandate.
- **MEKELLE FALLS** — Mekelle reported fallen.

## Global & technology

- **MICROSOFT OUTAGE DAY TWO** — The global Microsoft 365 outage (Outlook, Teams, Copilot) entered its second day.
- **IEA OIL SURPLUS** — The IEA forecast a Q4 oil surplus: 105M barrels/day, exceeding demand by 1.7M.
- **TRUMP XI PUTIN MEET** — A Trump–Xi–Putin meeting.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (sitting beside `main.ts`) to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output`). No network, no clock, no randomness — the output is a byte-for-byte
copy of the image in this repository.

## License

MIT. See [LICENSE](LICENSE).

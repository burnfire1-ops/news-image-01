# The Daily Herald — Friday 13 November 2026

A newspaper front page summing up the world's news of Friday 13 November 2026, built for the make.fun news-image-01 competition. The image is a newspaper front page and the judge has no news feed, so the headlines themselves must carry the news.

## The day's top stories

- **NVIDIA CEO RESIGNS** — Jensen Huang stepped down after reports of an affair with a woman alleged to be a Chinese spy and relationships with two employees; Nvidia shares fell, Huang was summoned to testify before Congress, and Colette Kress is interim CEO.
- **UKRAINE LAUNCHES MASS DRONE ATTACK** — Ukraine fired around 1,200 drones at Russian targets overnight in one of its largest aerial attacks, as US-led talks widened to European security.
- **US DOWNS IRANIAN DRONES** — The US military downed two Iranian drones headed for Bahrain, while Iran claimed a radar strike.
- **MICROSOFT OUTAGE ENTERS DAY TWO** — The global Microsoft 365 outage (Outlook, Teams, Copilot) entered its second day.
- **CHINA HOLDS PACIFIC DRILLS** — China held large unannounced naval drills around Taiwan, which Taiwan called intimidation.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (sitting beside `main.ts`) to `out/entry.png`. Node standard library only; no network, no clock, no randomness.

## License

MIT

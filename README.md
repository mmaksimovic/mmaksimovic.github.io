# Kljucna Rec

## Dodavanje novog blog posta

Da biste dodali novi blog post, sledite ove korake:

1. Kreirajte novi Markdown (.md) fajl u `src/pages/blog/` direktorijumu.
2. Dodajte sledeći frontmatter na početku fajla:

```
---
layout: ../../layouts/BlogPost.astro
title: 'Naslov blog posta'
pubDate: 2023-07-15
description: 'Opis blog posta'
image: 
    url: '/images/placeholder.jpg'
    alt: 'Placeholder image'
```


3. Ispod frontmatter-a, napišite sadržaj vašeg blog posta koristeći Markdown sintaksu.

## Napomene

- Obavezno postavite odgovarajuću sliku u `/public/images/` direktorijum pre nego što je referencirate u blog postu.
- Datum (`pubDate`) treba da bude u formatu YYYY-MM-DD.
- Tagovi su opcioni, ali pomažu u organizaciji i pretraživanju sadržaja.

Za više informacija o korišćenju Astro-a za blog, posetite [Astro dokumentaciju](https://docs.astro.build/).


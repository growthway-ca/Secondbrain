# Commonplace

A local-first second brain in a single HTML file. Capture thoughts, keep a daily journal, link notes with `[[wiki links]]`, and let the app find connections you didn't make yourself.

Open `index.html` in a browser. Notes are stored in that browser (IndexedDB); use **Import and backup** to save a copy.

## What's in it

| Area | What it does | Borrowed from |
| --- | --- | --- |
| Today | Quick capture (to inbox or journal), "Found for you" note pairs, forgotten notes worth revisiting, open tasks, activity heatmap | Readwise, Mem |
| Journal | A page per day, calendar, "on this day" from earlier years. `[[2026-10-18]]` links to a day | Logseq, Roam, Reflect, Day One |
| Notes | List, cards or board, search, source and tag filters | Bear, Google Keep |
| Board | Seedling → Budding → Evergreen, drag cards as ideas mature | Digital gardens, Heptabase |
| Tasks | Every `- [ ]` checkbox across all notes, tickable in place | Logseq, Obsidian Tasks |
| Graph | 3D map of notes and threads, highlight search, click for details | Obsidian |
| Note page | `/` block menu, `[[` link autocomplete, templates, emoji icons, outline, local graph, backlinks with context, unlinked mentions, hover previews, focus mode, pinning | Notion, Obsidian, Roam, iA Writer |
| Command palette | `Ctrl/⌘ K` to jump to any note or run any command | Raycast, Linear, Obsidian |
| Ask your notes | When opened on claude.ai, ask a question and Claude answers from your most relevant notes, with links back | Mem, Reflect |

Imports: Google Keep (Takeout zip/json), Claude export (zip/json), Markdown files or folders (Obsidian, Bear, Logseq), and Commonplace backups.

## Keyboard

`⌘K` or `/` search and commands · `N` new note · `J` journal · `T` today · `B` board · `G` graph · `R` random note · `E` edit · `F` focus · `?` all shortcuts

## Editing the source

The app is built from `src/` into `index.html`:

```
node build.mjs
```

- `src/core.js` — storage, connection engine (TF-IDF + tags + links), import/export, sample notes
- `src/ui.js` — views, editor, palette, graphs, events
- `src/styles.css` — design tokens and styles (light and dark)
- `src/shell.html` — page skeleton

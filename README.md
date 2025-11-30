## Run locally

Run dev server:

```bash
clone repo
npm i
npm run dev
```

<p>Don't forget to comment this lines in `next.config.ts` !<p>

```js
  output: 'export',
  basePath: '/testovoe-react-app',
  assetPrefix: '/testovoe-react-app',
```

## What I've done

### /products

- [x] Display the full list of products
- [x] The product card should have a like icon. Clicking on it toggles the like status. The icon should be highlighted when liked.
- [x] The product card should have a delete icon. Clicking it removes the card.
- [x] Add a filter to view all cards or only the favorite card
- [x] The card content (text) should be truncated so that all cards have the same height
- [x] Clicking anywhere on the card (except the like icon or delete button) should navigate to the product's separate page

### /products/:id

- [x] Show detailed information about the product
- [x] Add a button to return to the main page

### /create

- [x] Implement product creation
- [x] Create a form with mandatory fields and minimal validation
- [x] On form submission, save data to the global store

### Bonuses

- [ ] Implement pagination for the list
- [x] Implement the ability to edit product cards
- [ ] Implement additional filtering
- [x] Implement search (without a submit button)

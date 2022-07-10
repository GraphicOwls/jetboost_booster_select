## Jetboost Booster Select
New Jetboost radio input component used in new Booster Select UI in **"Create Booster"** modal.

Example:

```js
<Radio
  key={item.id}
  name='boosters'
  label={item.name}
  value={item.id}
  checked={item.id === isSelected}
  icon={
    <BoosterIcon
      type={item.internalKey}
      size='30'
      color='#5e72e4'
    />
  }
  onChange={() => {
    setIsSelected(item.id)
    setCurrentBooster(item.internalKey)
  }}
  id={item.id}
/>
```

<br>

### Dependencies:
1. `iconsax` – [npm page](https://www.npmjs.com/package/iconsax-react)
2. `classnames` – [npm page](https://www.npmjs.com/package/classnames)

<br>

### Demo
[Run Demo Here](https://jetboost-booster-select.vercel.app/)

import express from "express"
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('db.sqlite');

const app = express();

app.use(express.json())

const port = 3000

interface Ad {
  id: number
  title: string
  price: number
}

app.get("/", (req, res) => {
  console.log('test')
  res.send("Hello World!");
});

app.get('/ads', (req, res) => {
  db.all('SELECT * FROM ads', (err, ads) => {
    if (err) {
      console.error(err)
      return res.sendStatus(500)
    }
    res.send(ads)
  })
})

app.post('/ads', (req, res) => {
  db.run('INSERT INTO ads (title, price) VALUES ($title, $price)', {
    $title: req.body.title,
    $price: req.body.price
  }, function (err) {
    if (err) {
      console.error(err)
      return res.sendStatus(500)
    }
    res.send({ ...req.body, id: this.lastID })
  })
})

app.delete('/ads/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  db.get('SELECT * FROM ads WHERE id = $id', {
    $id: id
  }, (err, adToDelete: Ad) => {
    if (err) {
      console.error(err)
      return res.sendStatus(500)
    }
    if (!adToDelete) return res.sendStatus(404)
    db.run('DELETE FROM ads WHERE id = $id', {
      $id: id
    }, (err) => {
      if (err) {
        console.error(err)
        return res.sendStatus(500)
      }
      res.send('ad deleted !')
    })
  })


  /*
  
    const adToDelete = ads.find((ad) => ad.id === id)
    if (!adToDelete) return res.sendStatus(404)
    ads = ads.filter((ad) => ad.id !== id)
    res.send('ad deleted')
    */
})

app.patch('/ads/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)

  db.get('SELECT * FROM ads WHERE id = $id', {
    $id: id
  }, (err, adToUpdate: Ad) => {
    if (err) {
      console.error(err)
      return res.sendStatus(500)
    }
    if (!adToUpdate) return res.sendStatus(404)
    db.run('UPDATE ads SET title=$title, price=$price WHERE id = $id', {
      $id: id,
      $title: req.body.title || adToUpdate.title,
      $price: req.body.price || adToUpdate.price
    }, (err) => {
      if (err) {
        console.error(err)
        return res.sendStatus(500)
      }
      res.send('ad updated !')
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

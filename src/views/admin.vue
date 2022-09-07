<template>
  <div class="admin">
    <table class="table">
  <tr>
    <th class="table__heading">Player</th>
    <th class="table__heading">Seasons</th>
    <th class="table__heading">Points</th>
    <th class="table__heading">Jersey Number</th>
    <th class="table__heading">Teams</th>
    <th class="table__heading">Career</th>
  </tr>
  <tr class="table__row">
    <td class="table__content" data-heading="Player">Kareem Abdul-Jabbar</td>
    <td class="table__content" data-heading="Seasons">20</td>
    <td class="table__content" data-heading="Points">36.387</td>
    <td class="table__content" data-heading="Jersey Number">33</td>
    <td class="table__content" data-heading="Teams">Bucks / Lakers</td>
    <td class="table__content" data-heading="Career">1969-1989</td>
  </tr>
    <tr class="table__row">
    <td class="table__content" data-heading="Name">Karl Malone</td>
    <td class="table__content" data-heading="Seasons">19</td>
    <td class="table__content" data-heading="Points">36.928</td>
    <td class="table__content" data-heading="Jersey Number">32 / 11</td>
    <td class="table__content" data-heading="Teams">Jazz / Lakers</td>
    <td class="table__content" data-heading="Career">1985-2004</td>
  </tr>
  <tr class="table__row">
    <td class="table__content" data-heading="Name">Kobe Bryant</td>
    <td class="table__content" data-heading="Seasons">20</td>
    <td class="table__content" data-heading="Points">33.643</td>
    <td class="table__content" data-heading="Jersey Number">8 / 24</td>
    <td class="table__content" data-heading="Teams">Lakers</td>
    <td class="table__content" data-heading="Career">1996-2016</td>
  </tr>
  <tr class="table__row">
    <td class="table__content" data-heading="Name">Michael Jordan</td>
    <td class="table__content" data-heading="Seasons">15</td>
    <td class="table__content" data-heading="Points">32.292</td>
    <td class="table__content" data-heading="Jersey Number">23 / 45</td>
    <td class="table__content" data-heading="Teams">Bulls / Wizards</td>
    <td class="table__content" data-heading="Career">1984-2003</td>
  </tr>
  <tr class="table__row">
    <td class="table__content" data-heading="Name">Wilt Chamberlain</td>
    <td class="table__content" data-heading="Seasons">14</td>
    <td class="table__content" data-heading="Points">31.419</td>
    <td class="table__content" data-heading="Jersey Number">13</td>
    <td class="table__content" data-heading="Teams">Warriors / 76ers / Lakers</td>
    <td class="table__content" data-heading="Career">1959-1973</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


td, th { padding: 8px; padding: .5rem;
}

th {
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  font-size: 1.25rem;
}

td { font-family: 'Avenir Next', 'Segoe UI', 'Lucida Grande', sans-serif; }

.table {
  width: 100%;
  padding: 16px;
  padding: 1rem;
}

.table__heading { border-bottom: 2px solid #FFC842; }
 @media (max-width: 32rem) {
 .table__heading {
display: none;
}
 .table__content {
 display: block;
 padding: .5rem 0;
}
 .table__row {
 margin: .25rem 1rem;
 padding: .5rem 0;
 display: block;
 border-bottom: 2px solid #FFC842;
}
 .table__content:before {
 content: attr(data-heading);
 display: inline-block;
 width: 5rem;
 margin-right: .5rem;
 color: #999;
 font-size: .75rem;
 font-weight: 700;
 font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
 text-transform: uppercase;
 letter-spacing: 2px;
}
}

h1, h4 {
  margin: 50px auto 50px auto;
  text-align: center;
}
</style>
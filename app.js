const car = (name, model, year, owner, image) => ({name, model, year, owner, image})

const cars = [
  car('BMW','X5',2017,'Max','./img/bmw-x5.png'),
  car('Volkswagen','Passat',2015,'Vladimin','./img/volkswagen-passat.png'),
  car('Ford','Focus',2010,'Igor','./img/ford-focus.png'),
  car('Ford','Mustang',2014,'Petr','./img/ford-mustang.png'),
  car('Tesla','Model 3',2019,'Denis','./img/tesla-model3.png'),
  car('Volkswagen','Golf',2016,'Dima','./img/volkswagen-golf.png')
]
new Vue({
  el: '#app',
  data: {
    cars: cars,
    selectedCarIndex: 0,
    car: cars[0],
    phoneVisibility: false,
    search: ''
  },
  methods: {
    selectCar(index) {
      this.selectedCarIndex = index
      this.car = cars[index]
      //resrt
      this.phoneVisibility = false
    }
  },
  computed : {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filtredCars() {
      return this.cars.filter(car => {
        return ~car.name.toLowerCase().indexOf(this.search) || ~car.model.toLowerCase().indexOf(this.search)
      })
    }
  }
})
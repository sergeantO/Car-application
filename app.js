const car = (name, model, year, owner, image) => ({name, model, year, owner, image})
const log = (header, text, type, date = new Date()) => ({header, text, type, date})

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
    logs: [],
    phoneVisibility: false,
    search: '',
    modalVisability: false
  },
  methods: {
    selectCar(index) {
      this.selectedCarIndex = index
      this.car = cars[index]
      //resrt
      this.phoneVisibility = false
    },
    newOrder () {
      this.modalVisability = false
      this.logs.push(
        log('Sucsess order', `${this.car.name} - ${this.car.model}`, 'ok')
      )
    },
    cancelOrder () {
      this.modalVisability = false
      this.logs.push(
        log('Cancelled order', `${this.car.name} - ${this.car.model}`, 'cnl')
      )
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
    },
    filters: {
      date(value) {
        var options = {
          era: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };

        return value.toLocaleString("ru", options)
      }
    }
  }
})
import $ from 'jquery'

export default ([formData]) => {
   const camerasData = $(formData).find("[type=text]")
   console.log(camerasData)
   const options = $(formData).find("[type=checkbox]")

   const data = {}
   let isMKD = options[0].checked
   let needNetris = options[1].checked

   camerasData.each((key, el) => {
      data[`k${key+1}`] = +el.value || 0
   })

   options.each((key, el) => {
      if (el.id === "is-mkd") {
         isMKD = el.checked
      } else if (el.id === "need-license") {
         needNetris = el.checked
      }
   })


   let prices = {
      processors: [314, 391, 400, 499, 740],
      ssd: [30, 90],
      disk: [158, 218, 355, 670],
      box: [1600, 1850, 2200, 2800],
      motherboard: [400, 700],
      memory: 55,
      radiator: 60,
      controller: 450,
      consumable: 150,
      license: 47
   }

   let totalCameras = Object.values(data).reduce((memo, val) => memo + val, 0)

   let  {k1,k2,k3,k4,k5,k6,k7,k8} = data
   let archiveSize = isMKD
      ? (k1 + k2 + k3) * 1.4 + k3*0.7 + (k4 + k6 + k8) * 0.9
      : (k1 + k2) * 1.4 + (k3 + k4 + k5) * 0.3

   let diskType;
   let diskCount;
   let box;

   let processor
   let memory
   let ssd
   let motherboard

   let isPossibleCalc = true

   switch (true) {
      case archiveSize <= 20:
         diskType = 0
         diskCount = Math.ceil(archiveSize / 4) + 1
         box = 0
         break
      case(archiveSize <= 64):
         diskType = 1
         diskCount = Math.ceil(archiveSize / 8) + 1
         box = 0
         break
      case(archiveSize <= 96):
         diskType = 1
         diskCount = Math.ceil(archiveSize / 8) + 1
         box = 1
         break
      case(archiveSize <= 135):
         diskType = 1
         diskCount = Math.ceil(archiveSize / 8) + 1
         box = 2
         break
      case(archiveSize <= 360):
         diskType = 2
         diskCount = Math.ceil(archiveSize / 12) + 1
         box = 0
         break
      case(archiveSize <= 420):
         diskType = 3
         diskCount = Math.ceil(archiveSize / 16) + 1
         box = 3
         break
      default:
         isPossibleCalc = false
   }

   switch (true) {
      case(totalCameras < 16):
         processor = 0
         memory = 1
         ssd = 0
         motherboard = 0
         break
      case(totalCameras < 32):
         processor = 0
         memory = 2
         ssd = 0
         motherboard = 0
         break
      case(totalCameras < 65):
         processor = 1
         memory = 4
         ssd = 0
         motherboard = 0
         break
      case(totalCameras < 101):
         processor = 2
         memory = 8
         ssd = 0
         motherboard = 1
         break
      case(totalCameras < 201):
         processor = 3
         memory = 8
         ssd = 0
         motherboard = 1
         break
      case(totalCameras < 301):
         processor = 3
         memory = 12
         ssd = 1
         motherboard = 1
         break
      default:
         isPossibleCalc = false
   }




   let totalPrice = isPossibleCalc &&
   1.3 * (prices.processors[processor] +
   prices.motherboard[motherboard] +
   prices.box[box] +
   prices.radiator +
   prices.memory * memory +
   prices.ssd[ssd] * 2 +
   prices.disk[diskType] * diskCount +
   prices.controller +
   prices.consumable) +
   (needNetris ? totalCameras * prices.license : 0)


   if (isPossibleCalc) {
      console.table({
         'Количество камер': totalCameras,
         'Размер архива': archiveSize,
         'Стоимость процессора': prices.processors[processor],
         'Стоимость материнской платы': prices.motherboard[motherboard],
         'Стоимость корпуса': prices.box[box],
         'Стоимость радиатора': prices.radiator,
         'Стоимость памяти': prices.memory * memory,
         'Стоимость ССД': prices.ssd[ssd],
         'Количество дисков': diskCount,
         'Стоимость дисков': prices.disk[diskType] * diskCount,
         'Стоимость контроллера': prices.controller,
         'Стоимость расходников': prices.consumable,
         'Стоимость лицензии': needNetris ? totalCameras * prices.license : 'без лицензии',
         'ОБЩАЯ СТОИМОСТЬ': totalPrice
      })
   } else {
      console.log('Автоматический расчёт невозможен')
   }

   return {
      price: isPossibleCalc ? totalPrice : false,
      count: totalCameras
   }
}





//Publisher
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1234')

const topic = 'msg'
const message= "Kese ho bhaya aap to bade heavy driver nikle!!!"

client.on('connect',()=>{
    client.publish(topic,message, ()=>{
        console.log("Message sent to heavy driver")
    })
})
export default defineEventHandler(event => {
  const eventStream = createEventStream(event)
  const charArr = text.split('')
  const interval = setInterval(async () => {
    if (charArr.length) {
      await eventStream.push(JSON.stringify(charArr.shift())) // 这里需要做转义, 以处理\n的问题
    } else {
      clearInterval(interval)
    }
  }, 50)
  eventStream.onClosed(async () => {
    clearInterval(interval)
    await eventStream.close()
  })
  return eventStream.send()
})

const text = `
How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day’s
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right.
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood’s faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.
`

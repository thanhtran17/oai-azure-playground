const { OPENAI_API_URL, OPENAI_API_KEY } = require('./utils/config')

const requestBody = {
  messages: [
    {
      role: 'system',
      content:
        "You are an AI assistant that analyze customers's sentiment through the conversation that user give.",
    },
    {
      role: 'user',
      content: 'Can you say hello to me? ',
    },
  ],
  max_tokens: 2500,
  temperature: 0.7,
  frequency_penalty: 0,
  presence_penalty: 0,
  top_p: 0.95,
  stop: null,
  stream: false,
}

async function fetchDataFromOAIAzure(requestBody) {
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': OPENAI_API_KEY,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const content = data?.choices[0]?.message?.content

    console.log(content)

    if (!content) {
      // Call the fetchDataFromOAIAzure function again
      console.log('Response content is empty, refetching...')
      await fetchDataFromOAIAzure(requestBody)
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

fetchDataFromOAIAzure(requestBody)

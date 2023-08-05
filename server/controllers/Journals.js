import Journals from "../models/JournalModel.js";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(config);

export const writeJournal = async (req, res) => {
  try {
    console.log("Masuk sini gak try writeJournal");
    const { userId, prompt, journalDate } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 512,
    });
    Journals.create({
      user_id: userId,
      journal: prompt,
    })
    console.log("RESPONSE:", completion);
    res.json({ msg: completion.data.choices[0].text });
  } catch (error) {
    console.log("Nulis jurnal error di controller jurnal : ", error);
    return res.sendStatus(400);
  }
};

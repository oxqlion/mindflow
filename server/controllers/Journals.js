import Journals from "../models/JournalModel.js";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  organization: "org-eBTLJfPBX0B8JIErK6wSO83h",
  apiKey: "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",
});

const openai = new OpenAIApi(config);

export const writeJournal = async(req, res) => {
  try {
    console.log("Masuk sini gak try writeJournal")
    const { userId, userJournal, journalDate } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: "Hello GPT" }],
    });
    console.log("RESPONSE:", response);
    res.json({ msg: completion.data.choices[0].message });
  } catch (error) {
    console.log("Nulis jurnal error di controller jurnal : ", error);
  }
};

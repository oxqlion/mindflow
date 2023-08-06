import { Configuration, OpenAIApi } from "openai";
import Journals from "../models/JournalModel.js";
import Results from "../models/ResultModel.js";
import Progress from "../models/ProgressModel.js";
import Patience from "../models/PatienceModel.js";
import NonReactivity from "../models/NonReactivityModel.js";
import Acceptance from "../models/AcceptanceModel.js";
import Gratitude from "../models/GratitudeModel.js";

const config = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(config);

export const writeJournal = async (req, res) => {
  const { userId, prompt, journalDate } = req.body;

  try {
    console.log("Masuk sini gak try writeJournal");
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 512,
    });
    const newJournal = await Journals.create({
      user_id: userId,
      journal: prompt,
    });
    const result = await Results.create({
      user_id: userId,
      journal_id: newJournal.id,
      result: completion.data.choices[0].text,
    });

    console.log("Patience di backend : ", completion.data.choices[0].text[0].split(":")[1]);
  console.log("Non Reactivity di backend : ", completion.data.choices[0].text[1].split(":")[1]);
  console.log("Acceptance di backend : ", completion.data.choices[0].text[2].split(":")[1]);
  console.log("Gratitude di backend : ", completion.data.choices[0].text[3].split(":")[1]);

    const resArr = completion.data.choices[0].text
      .split(/\d+\./g)
      .filter((item) => item.trim().length > 0);

    const patienceRes = await Patience.create({
      user_id: userId,
      result_id: result.id,
      journal_id: newJournal.id,
      task: resArr[0].split(":")[1],
      finished: 0,
    });
    const NonReactivityRes = await NonReactivity.create({
      user_id: userId,
      result_id: result.id,
      journal_id: newJournal.id,
      task: resArr[1].split(":")[1],
      finished: 0,
    });
    const acceptanceRes = await Acceptance.create({
      user_id: userId,
      result_id: result.id,
      journal_id: newJournal.id,
      task: resArr[2].split(":")[1],
      finished: 0,
    });
    const gratitudeRes = await Gratitude.create({
      user_id: userId,
      result_id: result.id,
      journal_id: newJournal.id,
      task: resArr[3].split(":")[1],
      finished: 0,
    });

    console.log("RESPONSE:", completion);
    res.json({
      journal: newJournal,
      resultId: result.id,
      msg: completion.data.choices[0].text,
    });
  } catch (error) {
    console.log("Nulis jurnal error di controller jurnal : ", error);
    return res.sendStatus(400);
  }
};

import { Block, Box, Container, Content, Heading, Message, Notification } from "react-bulma-components"
import * as Helpers from "../helpers"
const { ARR, STR, OBJ } = Helpers

export const HelpersConstants = () => (
	<div>
		<p>Helpers.BIG: </p>
		<p>{JSON.stringify(Helpers.BIG, null, 2)} </p>
		<br />
		<p>Helpers.NULL: </p>
		<p>{JSON.stringify(Helpers.NULL, null, 2)} </p>
		<br />
		<p>Helpers.STR: </p>
		<p>{JSON.stringify(Helpers.STR, null, 2)} </p>
		<br />
		<p>Helpers.ERR: </p>
		<p>{JSON.stringify(Helpers.ERR, null, 2)} </p>
		<br />
		<p>Helpers.RND: </p>
		<p>{JSON.stringify(Helpers.RND, null, 2)} </p>
		<br />
		<p>Helpers.NUM: </p>
		<p>{JSON.stringify(Helpers.NUM, null, 2)} </p>
		<br />
		<p>Helpers.BLN: </p>
		<p>{JSON.stringify(Helpers.BLN, null, 2)} </p>
		<br />
		<p>Helpers.ARR: </p>
		<p>{JSON.stringify(Helpers.ARR, null, 2)} </p>
		<br />
		<p>Helpers.OBJ: </p>
		<p>{JSON.stringify(Helpers.OBJ, null, 2)} </p>
		<br />
		<p>Helpers.FUNC: </p>
		<p>{JSON.stringify(Helpers.FUNC, null, 2)} </p>
		<br />
		<p>Helpers.VALUES_SOURCES: </p>
		<p>{JSON.stringify(Helpers.VALUES_SOURCES, null, 2)} </p>
		<br />
		<p>Helpers.VALUES: </p>
		<p>{JSON.stringify(Helpers.VALUES, null, 2)} </p>
		<br />
		<p>Helpers.TYPEOF: </p>
		<p>{JSON.stringify(Helpers.TYPEOF, null, 2)} </p>
		<br />
		<p>Helpers.DECORATE_SOURCES: </p>
		<p>{JSON.stringify(Helpers.DECORATE_SOURCES, null, 2)} </p>
		<br />
		<p>Helpers.DECORATE_METHODS: </p>
		<p>{JSON.stringify(Helpers.DECORATE_METHODS, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_LINE: </p>
		<p>{JSON.stringify(Helpers.CHAR_LINE, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_TAB: </p>
		<p>{JSON.stringify(Helpers.CHAR_TAB, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_SPACE: </p>
		<p>{JSON.stringify(Helpers.CHAR_SPACE, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_COMMA: </p>
		<p>{JSON.stringify(Helpers.CHAR_COMMA, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_DOT: </p>
		<p>{JSON.stringify(Helpers.CHAR_DOT, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_DIV: </p>
		<p>{JSON.stringify(Helpers.CHAR_DIV, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_ENG: </p>
		<p>{JSON.stringify(Helpers.CHARS_ENG, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_RUS: </p>
		<p>{JSON.stringify(Helpers.CHARS_RUS, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_NUM: </p>
		<p>{JSON.stringify(Helpers.CHARS_NUM, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_SIMPLE: </p>
		<p>{JSON.stringify(Helpers.CHARS_SIMPLE, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_SPECIAL: </p>
		<p>{JSON.stringify(Helpers.CHARS_SPECIAL, null, 2)} </p>
		<br />
		<p>Helpers.CHARS_VALID: </p>
		<p>{JSON.stringify(Helpers.CHARS_VALID, null, 2)} </p>
		<br />
		<p>Helpers.DIV_CONTENT: </p>
		<p>{JSON.stringify(Helpers.DIV_CONTENT, null, 2)} </p>
		<br />
		<p>Helpers.DIV_LINE: </p>
		<p>{JSON.stringify(Helpers.DIV_LINE, null, 2)} </p>
		<br />
		<p>Helpers.DIV_TITLE: </p>
		<p>{JSON.stringify(Helpers.DIV_TITLE, null, 2)} </p>
		<br />
		<p>Helpers.MIN: </p>
		<p>{JSON.stringify(Helpers.MIN, null, 2)} </p>
		<br />
		<p>Helpers.MAX: </p>
		<p>{JSON.stringify(Helpers.MAX, null, 2)} </p>
		<br />
		<p>Helpers.RANGE: </p>
		<p>{JSON.stringify(Helpers.RANGE, null, 2)} </p>
		<br />
		<p>Helpers.RANGE_LENGTH: </p>
		<p>{JSON.stringify(Helpers.RANGE_LENGTH, null, 2)} </p>
		<br />
		<p>Helpers.ARRAY_SIZE: </p>
		<p>{JSON.stringify(Helpers.ARRAY_SIZE, null, 2)} </p>
		<br />
		<p>Helpers.LIKE_DIFF: </p>
		<p>{JSON.stringify(Helpers.LIKE_DIFF, null, 2)} </p>
		<br />
		<p>Helpers.OPTIONS_FS: </p>
		<p>{JSON.stringify(Helpers.OPTIONS_FS, null, 2)} </p>
		<br />
		<p>Helpers.INPUT_SIZE: </p>
		<p>{JSON.stringify(Helpers.INPUT_SIZE, null, 2)} </p>
		<br />
		<p>Helpers.HIDDEN_SIZE: </p>
		<p>{JSON.stringify(Helpers.HIDDEN_SIZE, null, 2)} </p>
		<br />
		<p>Helpers.OUTPUT_SIZE: </p>
		<p>{JSON.stringify(Helpers.OUTPUT_SIZE, null, 2)} </p>
		<br />
		<p>Helpers.TRAIN_SET_SIZE: </p>
		<p>{JSON.stringify(Helpers.TRAIN_SET_SIZE, null, 2)} </p>
		<br />
		<p>Helpers.LEARNING_RATE: </p>
		<p>{JSON.stringify(Helpers.LEARNING_RATE, null, 2)} </p>
		<br />
		<p>Helpers.ITERATIONS: </p>
		<p>{JSON.stringify(Helpers.ITERATIONS, null, 2)} </p>
		<br />
		<p>Helpers.ERROR_THRESHOLD: </p>
		<p>{JSON.stringify(Helpers.ERROR_THRESHOLD, null, 2)} </p>
		<br />
		<p>Helpers.LOG_PERIOD: </p>
		<p>{JSON.stringify(Helpers.LOG_PERIOD, null, 2)} </p>
		<br />
		<p>Helpers.OPTIONS_BRAIN_LSTM: </p>
		<p>{JSON.stringify(Helpers.OPTIONS_BRAIN_LSTM, null, 2)} </p>
		<br />
		<p>Helpers.OPTIONS_BRAIN_TRAIN: </p>
		<p>{JSON.stringify(Helpers.OPTIONS_BRAIN_TRAIN, null, 2)} </p>
		<br />
		<p>Helpers.TIME: </p>
		<p>{JSON.stringify(Helpers.TIME, null, 2)} </p>
		<br />
		<p>Helpers.CHAR_CODE_MULT: </p>
		<p>{JSON.stringify(Helpers.CHAR_CODE_MULT, null, 2)} </p>
		<br />
		<p>Helpers.MAX_ENCODED_SIZE: </p>
		<p>{JSON.stringify(Helpers.MAX_ENCODED_SIZE, null, 2)} </p>
		<br />
	</div>
)

const FUNC_SOURCES = [
	{ desc: "arrArrays", func: Helpers.arrArrays, args: [ARR] },
	{ desc: "arrElementNext", func: Helpers.arrElementNext, args: [ARR] },
	{ desc: "arrElementPrev", func: Helpers.arrElementPrev, args: [ARR] },
	{ desc: "arrFindFirst", func: Helpers.arrFindFirst, args: [ARR] },
	{ desc: "arrFindLast", func: Helpers.arrFindLast, args: [ARR] },
	{ desc: "arrFirst", func: Helpers.arrFirst, args: [ARR] },
	{ desc: "arrFunctions", func: Helpers.arrFunctions, args: [ARR] },
	{ desc: "arrHasType", func: Helpers.arrHasType, args: [ARR] },
	{ desc: "arrLast", func: Helpers.arrLast, args: [ARR] },
	{ desc: "arrLastIndex", func: Helpers.arrLastIndex, args: [ARR] },
	{ desc: "arrNumbers", func: Helpers.arrNumbers, args: [ARR] },
	{ desc: "arrObjects", func: Helpers.arrObjects, args: [ARR] },
	{ desc: "arrStrings", func: Helpers.arrStrings, args: [ARR] },
	{ desc: "arrUnical", func: Helpers.arrUnical, args: [ARR] },
	{ desc: "arrNeigbours", func: Helpers.arrNeigbours, args: [ARR] },
	{ desc: "getSource", func: Helpers.getSource, args: [ARR] },
	{ desc: "getTimestamp", func: Helpers.getTimestamp, args: [ARR] },
	{ desc: "getPhrasesByIndex", func: Helpers.getPhrasesByIndex, args: [[STR], 0] },
	{ desc: "getPhrasesByLength", func: Helpers.getPhrasesByLength, args: [[STR], STR.length] },
	{ desc: "getPhrasesEndsWith", func: Helpers.getPhrasesEndsWith, args: [[STR], STR.at(-1)] },
	{ desc: "getPhrasesStartsWith", func: Helpers.getPhrasesStartsWith, args: [[STR], STR.at(0)] },
	{ desc: "getPhrasesWithoutWord", func: Helpers.getPhrasesWithoutWord, args: [[STR], "test"] },
	{ desc: "getPhrasesWithWord", func: Helpers.getPhrasesWithWord, args: [[STR], STR] },
	{ desc: "is", func: Helpers.is, args: [ARR] },
	{ desc: "isArr", func: Helpers.isArr, args: [ARR] },
	{ desc: "isBig", func: Helpers.isBig, args: [Number.MAX_VALUE] },
	{ desc: "isBool", func: Helpers.isBool, args: [true] },
	{ desc: "isEqualType", func: Helpers.isEqualType, args: [STR, STR] },
	{ desc: "isEvery", func: Helpers.isEvery, args: [ARR, ...ARR] },
	{ desc: "isSome", func: Helpers.isSome, args: [ARR, ...ARR] },
	{ desc: "isExist", func: Helpers.isExist, args: [ARR, ...ARR] },
	{ desc: "isFunc", func: Helpers.isFunc, args: [Helpers.FUNC] },
	{ desc: "isLen", func: Helpers.isLen, args: [ARR] },
	{ desc: "isLenMax", func: Helpers.isLenMax, args: [ARR, 1000] },
	{ desc: "isLenMin", func: Helpers.isLenMin, args: [ARR, 0] },
	{ desc: "isLenRange", func: Helpers.isLenRange, args: [ARR, 1, 1000] },
	{ desc: "isNum", func: Helpers.isNum, args: [Helpers.NUM] },
	{ desc: "isObj", func: Helpers.isObj, args: [OBJ] },
	{ desc: "isRxp", func: Helpers.isRxp, args: [new RegExp(STR)] },
	{ desc: "isStr", func: Helpers.isStr, args: [STR] },
	{ desc: "isSym", func: Helpers.isSym, args: [Helpers.SYM] },
	{ desc: "isUnd", func: Helpers.isUnd, args: [undefined] },
	{ desc: "randArr", func: Helpers.randArr, args: [3] },
	{ desc: "randBool", func: Helpers.randBool, args: [null] },
	{ desc: "randCharCodeKyrillic", func: Helpers.randCharCodeKyrillic, args: [null] },
	{ desc: "randCharCodeLatin", func: Helpers.randCharCodeLatin, args: [null] },
	{ desc: "randCoin", func: Helpers.randCoin, args: [null] },
	{ desc: "randElement", func: Helpers.randElement, args: [ARR] },
	{ desc: "randElementsMany", func: Helpers.randElementsMany, args: [ARR, 3] },
	{ desc: "randId", func: Helpers.randId, args: [null] },
	{ desc: "randIndex", func: Helpers.randIndex, args: [ARR] },
	{ desc: "randInt", func: Helpers.randInt, args: [null] },
	{ desc: "randKey", func: Helpers.randKey, args: [OBJ] },
	{ desc: "randMany", func: Helpers.randMany, args: [ARR] },
	{ desc: "randObj", func: Helpers.randObj, args: [null] },
	{ desc: "randObjEntry", func: Helpers.randObjEntry, args: [OBJ] },
	{ desc: "randObjKey", func: Helpers.randObjKey, args: [OBJ] },
	{ desc: "randObjValue", func: Helpers.randObjValue, args: [OBJ] },
	{ desc: "randPhraseFromWords", func: Helpers.randPhraseFromWords, args: [[STR, STR]] },
	{ desc: "randSort", func: Helpers.randSort, args: [ARR] },
	{ desc: "randStr", func: Helpers.randStr, args: [null] },
	{ desc: "randExamples", func: Helpers.randExamples, args: [null] },
	{ desc: "reduceElements", func: Helpers.reduceElements, args: [ARR] },
	{ desc: "reduceSum", func: Helpers.reduceSum, args: [ARR] },
	{ desc: "reduceText", func: Helpers.reduceText, args: [ARR] }
].map(({ desc, func, args }, index) => {
	const result = func(...args)
	return { desc, result, args, func, index }
})
export const HelpersResults = () => {
	const SOURCES = FUNC_SOURCES.map((src) => (
		<Box key={src.desc} style={{ border: "5px solid green", padding: "10px", margin: "10px" }}>
			<Block>
				<Notification color="primary">Description: {JSON.stringify(src.desc, null, 2)}</Notification>
			</Block>
			<Block>
				<Notification color="secondary">Arguments: {JSON.stringify(src.args, null, 2)}</Notification>
			</Block>
			<Block>
				<Notification color="success">Result: {JSON.stringify(src.result, null, 2)}</Notification>
			</Block>
			<Block>
				<Notification color="warning">All: {JSON.stringify(src, null, 2)}</Notification>
			</Block>
		</Box>
	))
	return (
		<Container autoCapitalize="true" autoCorrect="true">
			{SOURCES}
		</Container>
	)

	// <div>
	// 	<>
	// 		<p>getLogExamples</p>
	// 		<p>{JSON.stringify(Helpers.getLogExamples(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getTimestamp</p>
	// 		<p>{JSON.stringify(Helpers.getTimestamp(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getSource</p>
	// 		<p>{JSON.stringify(Helpers.getSource(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toStr</p>
	// 		<p>{JSON.stringify(Helpers.toStr(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toArr</p>
	// 		<p>{JSON.stringify(Helpers.toArr(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toObj</p>
	// 		<p>{JSON.stringify(Helpers.toObj(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toNum</p>
	// 		<p>{JSON.stringify(Helpers.toNum(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toJson</p>
	// 		<p>{JSON.stringify(Helpers.toJson(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toFunc</p>
	// 		<p>{JSON.stringify(Helpers.toFunc(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toType</p>
	// 		<p>{JSON.stringify(Helpers.toType(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>showLog</p>
	// 		<p>{JSON.stringify(Helpers.showLog(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>showInfo</p>
	// 		<p>{JSON.stringify(Helpers.showInfo(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>showWarn</p>
	// 		<p>{JSON.stringify(Helpers.showWarn(), null, 2)}</p>
	// 	</>
	// 	showError
	// 	<>
	// 		<p>showDebug</p>
	// 		<p>{JSON.stringify(Helpers.showDebug(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>showTime</p>
	// 		<p>{JSON.stringify(Helpers.showTime(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>is</p>
	// 		<p>{JSON.stringify(Helpers.is(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isLen</p>
	// 		<p>{JSON.stringify(Helpers.isLen(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isLenMin</p>
	// 		<p>{JSON.stringify(Helpers.isLenMin(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isLenMax</p>
	// 		<p>{JSON.stringify(Helpers.isLenMax(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isLenRange</p>
	// 		<p>{JSON.stringify(Helpers.isLenRange(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isNum</p>
	// 		<p>{JSON.stringify(Helpers.isNum(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isStr</p>
	// 		<p>{JSON.stringify(Helpers.isStr(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isFunc</p>
	// 		<p>{JSON.stringify(Helpers.isFunc(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isBool</p>
	// 		<p>{JSON.stringify(Helpers.isBool(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isBig</p>
	// 		<p>{JSON.stringify(Helpers.isBig(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isSym</p>
	// 		<p>{JSON.stringify(Helpers.isSym(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isUnd</p>
	// 		<p>{JSON.stringify(Helpers.isUnd(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isArr</p>
	// 		<p>{JSON.stringify(Helpers.isArr(), null, 2)}</p>
	// 	</>
	// 	isObj
	// 	<>
	// 		<p>isRxp</p>
	// 		<p>{JSON.stringify(Helpers.isRxp(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isExist</p>
	// 		<p>{JSON.stringify(Helpers.isExist(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isEqualType</p>
	// 		<p>{JSON.stringify(Helpers.isEqualType(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isEvery</p>
	// 		<p>{JSON.stringify(Helpers.isEvery(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>isSome</p>
	// 		<p>{JSON.stringify(Helpers.isSome(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strHumanize</p>
	// 		<p>{JSON.stringify(Helpers.strHumanize(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strLines</p>
	// 		<p>{JSON.stringify(Helpers.strLines(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strCollapseWhitespace</p>
	// 		<p>{JSON.stringify(Helpers.strCollapseWhitespace(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strTitleCase</p>
	// 		<p>{JSON.stringify(Helpers.strTitleCase(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strTrim</p>
	// 		<p>{JSON.stringify(Helpers.strTrim(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strRainbow</p>
	// 		<p>{JSON.stringify(Helpers.strRainbow(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strAtlas</p>
	// 		<p>{JSON.stringify(Helpers.strAtlas(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strInstagram</p>
	// 		<p>{JSON.stringify(Helpers.strInstagram(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strVice</p>
	// 		<p>{JSON.stringify(Helpers.strVice(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strTable</p>
	// 		<p>{JSON.stringify(Helpers.strTable(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrUnical</p>
	// 		<p>{JSON.stringify(Helpers.arrUnical(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrLastIndex</p>
	// 		<p>{JSON.stringify(Helpers.arrLastIndex(), null, 2)}</p>
	// 	</>
	// 	arrFindLast
	// 	<>
	// 		<p>arrNumbers</p>
	// 		<p>{JSON.stringify(Helpers.arrNumbers(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrStrings</p>
	// 		<p>{JSON.stringify(Helpers.arrStrings(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrObjects</p>
	// 		<p>{JSON.stringify(Helpers.arrObjects(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrFunctions</p>
	// 		<p>{JSON.stringify(Helpers.arrFunctions(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrArrays</p>
	// 		<p>{JSON.stringify(Helpers.arrArrays(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrFirst</p>
	// 		<p>{JSON.stringify(Helpers.arrFirst(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrLast</p>
	// 		<p>{JSON.stringify(Helpers.arrLast(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrFindFirst</p>
	// 		<p>{JSON.stringify(Helpers.arrFindFirst(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrHasType</p>
	// 		<p>{JSON.stringify(Helpers.arrHasType(), null, 2)}</p>
	// 	</>
	// 	strToMaxLen
	// 	<>
	// 		<p>strToMinLen</p>
	// 		<p>{JSON.stringify(Helpers.strToMinLen(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strToMatchLen</p>
	// 		<p>{JSON.stringify(Helpers.strToMatchLen(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toCharCode</p>
	// 		<p>{JSON.stringify(Helpers.toCharCode(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toCharFromCode</p>
	// 		<p>{JSON.stringify(Helpers.toCharFromCode(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>toCharCodeFromText</p>
	// 		<p>{JSON.stringify(Helpers.toCharCodeFromText(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randStr</p>
	// 		<p>{JSON.stringify(Helpers.randStr(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randBool</p>
	// 		<p>{JSON.stringify(Helpers.randBool(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randInt</p>
	// 		<p>{JSON.stringify(Helpers.randInt(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randCoin</p>
	// 		<p>{JSON.stringify(Helpers.randCoin(), null, 2)}</p>
	// 	</>
	// 	randId
	// 	<>
	// 		<p>randKey</p>
	// 		<p>{JSON.stringify(Helpers.randKey(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randArr</p>
	// 		<p>{JSON.stringify(Helpers.randArr(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randObj</p>
	// 		<p>{JSON.stringify(Helpers.randObj(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randMany</p>
	// 		<p>{JSON.stringify(Helpers.randMany(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randSort</p>
	// 		<p>{JSON.stringify(Helpers.randSort(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randIndex</p>
	// 		<p>{JSON.stringify(Helpers.randIndex(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randElement</p>
	// 		<p>{JSON.stringify(Helpers.randElement(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randElementsMany</p>
	// 		<p>{JSON.stringify(Helpers.randElementsMany(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randObjKey</p>
	// 		<p>{JSON.stringify(Helpers.randObjKey(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randObjValue</p>
	// 		<p>{JSON.stringify(Helpers.randObjValue(), null, 2)}</p>
	// 	</>
	// 	randObjEntry
	// 	<>
	// 		<p>randCharCodeLatin</p>
	// 		<p>{JSON.stringify(Helpers.randCharCodeLatin(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randCharCodeKyrillic</p>
	// 		<p>{JSON.stringify(Helpers.randCharCodeKyrillic(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>randExamples</p>
	// 		<p>{JSON.stringify(Helpers.randExamples(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>slice</p>
	// 		<p>{JSON.stringify(Helpers.slice(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrNeigbours</p>
	// 		<p>{JSON.stringify(Helpers.arrNeigbours(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrElementNext</p>
	// 		<p>{JSON.stringify(Helpers.arrElementNext(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>arrElementPrev</p>
	// 		<p>{JSON.stringify(Helpers.arrElementPrev(), null, 2)}</p>
	// 	</>
	// 	strSplit
	// 	<>
	// 		<p>strChars</p>
	// 		<p>{JSON.stringify(Helpers.strChars(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strWords</p>
	// 		<p>{JSON.stringify(Helpers.strWords(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strPhrases</p>
	// 		<p>{JSON.stringify(Helpers.strPhrases(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strCharsUnical</p>
	// 		<p>{JSON.stringify(Helpers.strCharsUnical(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strWordsUnical</p>
	// 		<p>{JSON.stringify(Helpers.strWordsUnical(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strPhrasesUnical</p>
	// 		<p>{JSON.stringify(Helpers.strPhrasesUnical(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strLinesUnical</p>
	// 		<p>{JSON.stringify(Helpers.strLinesUnical(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strWordFirst</p>
	// 		<p>{JSON.stringify(Helpers.strWordFirst(), null, 2)}</p>
	// 	</>
	// 	strWordLast
	// 	<>
	// 		<p>randPhraseFromWords</p>
	// 		<p>{JSON.stringify(Helpers.randPhraseFromWords(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getPhrasesWithWord</p>
	// 		<p>{JSON.stringify(Helpers.getPhrasesWithWord(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getPhrasesWithoutWord</p>
	// 		<p>{JSON.stringify(Helpers.getPhrasesWithoutWord(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getPhrasesEndsWith</p>
	// 		<p>{JSON.stringify(Helpers.getPhrasesEndsWith(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>getPhrasesStartsWith</p>
	// 		<p>{JSON.stringify(Helpers.getPhrasesStartsWith(), null, 2)}</p>
	// 	</>
	// 	getPhrasesByLength
	// 	<>
	// 		<p>getPhrasesByIndex</p>
	// 		<p>{JSON.stringify(Helpers.getPhrasesByIndex(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>reduceText</p>
	// 		<p>{JSON.stringify(Helpers.reduceText(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>reduceSum</p>
	// 		<p>{JSON.stringify(Helpers.reduceSum(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>reduceElements</p>
	// 		<p>{JSON.stringify(Helpers.reduceElements(), null, 2)}</p>
	// 	</>
	// 	<>
	// 		<p>strToTitleCase</p>
	// 		<p>{JSON.stringify(Helpers.strToTitleCase(), null, 2)}</p>
	// 	</>
	// </div>
}

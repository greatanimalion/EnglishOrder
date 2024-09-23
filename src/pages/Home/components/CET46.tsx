
import { useEffect, useRef, memo } from "react"

export const CETOralTest = memo(() => {
    const div = useRef<HTMLDivElement>(null);
    useEffect(() => {
        div.current!.innerHTML = ` <table align="center" border="1" style="margin:10px auto;background:white; border-collapse:collapse; border:solid #dddddd 1.0pt; width:432.75pt">
                <tbody>
                    <tr>
                        <td style="background-color:white; height:18.0pt; width:72.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">试卷结构</p>
                        </td>
                        <td style="background-color:white; height:18.0pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">　测试内容</p>
                        </td>
                        <td style="background-color:white; height:18.0pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">测试题型</p>
                        </td>
                        <td style="background-color:white; height:18.0pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">题目数量</p>
                        </td>
                        <td style="background-color:white; height:18.0pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">分值比例</p>
                        </td>
                        <td style="background-color:white; height:18.0pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">考试时间</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:72.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">写作</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">写作</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">短文写作</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">1</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">15%</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">30分钟</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="background-color:white; height:13.5pt; width:72.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">听力理解</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">短篇新闻</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">7</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">7%</p>
                        </td>
                        <td rowspan="3" style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">25分钟</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">长对话</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">8</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">8%</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">听力篇章</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">20%</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="background-color:white; height:13.5pt; width:72.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">阅读理解</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">词汇理解</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">选词填空</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">5%</p>
                        </td>
                        <td rowspan="3" style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">40分钟</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">长篇阅读</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">匹配</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">10%</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">仔细阅读</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">20%</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:white; height:13.5pt; width:72.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">翻译</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">汉译英</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:135.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">段落翻译</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">1</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">15%</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">30分钟</p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="background-color:white; height:13.5pt; width:263.25pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">总计</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">57</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">　　100%</p>
                        </td>
                        <td style="background-color:white; height:13.5pt; width:57.0pt">
                            <p style="margin-left:0cm; margin-right:0cm; text-align:center">125分钟</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>六级考核内容如下：</h2>
                <table align="center" border="1" style="margin:10px auto;background:white; border-collapse:collapse; border:solid #dddddd 1.0pt; width:432.75pt">
	<tbody>
		<tr>
			<td style="background-color:white; height:18.0pt; width:72.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">试卷结构</p>
			</td>
			<td style="background-color:white; height:18.0pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">测试内容</p>
			</td>
			<td style="background-color:white; height:18.0pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">测试题型</p>
			</td>
			<td style="background-color:white; height:18.0pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">题目数量</p>
			</td>
			<td style="background-color:white; height:18.0pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">分值比例</p>
			</td>
			<td style="background-color:white; height:18.0pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">考试时间</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:72.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">写作</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">写作</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">短文写作</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">1</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">15%</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">30分钟</p>
			</td>
		</tr>
		<tr>
			<td rowspan="3" style="background-color:white; height:13.5pt; width:72.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">听力理解</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">长对话</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">8</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">8%</p>
			</td>
			<td rowspan="3" style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">30分钟</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">听力篇章</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">7</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">7%</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">讲话/报道/讲座</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（单选题）</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">20%</p>
			</td>
		</tr>
		<tr>
			<td rowspan="3" style="background-color:white; height:13.5pt; width:72.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">阅读理解</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">词汇理解</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">选词填空</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">5%</p>
			</td>
			<td rowspan="3" style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">40分钟</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">长篇阅读</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">匹配</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">10%</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">仔细阅读</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">选择题（选择题）</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">10</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">20%</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; height:13.5pt; width:72.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">翻译</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">&nbsp;</td>
			<td style="background-color:white; height:13.5pt; width:135.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">段落翻译</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">1</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">15%</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">30分钟</p>
			</td>
		</tr>
		<tr>
			<td colspan="3" style="background-color:white; height:13.5pt; width:263.25pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">总计</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">57</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">100%</p>
			</td>
			<td style="background-color:white; height:13.5pt; width:57.0pt">
			<p style="margin-left:0cm; margin-right:0cm; text-align:center">130分钟</p>
			</td>
		</tr>
	</tbody>
</table>
            `

    })
    return (
        <>
            <p>CET笔试每年开考两次，分别于6月和12月举行，具体考试时间我中心将会在每年年初另行通知。6月份开考科目为英语四级、六级，日语四级、六级，德语四级、六级、俄语四级、六级以及法语四级，12月份仅开考英语四级和六级。</p>
            <h2>四级考核内容如下：</h2>
            <div ref={div}></div>
        </>
    )
})
export const CETWritten = memo(() => {
    const div = useRef<HTMLDivElement>(null);
    useEffect(() => {
        div.current!.innerHTML = `<table align="left" border="1" cellspacing="0" style="magin:10px auto;width:952px;">
	<tbody>
		<tr>
			<td>部分</td>
			<td>任务名称</td>
			<td>考试过程</td>
			<td>答题时间</td>
		</tr>
		<tr>
			<td>Part1</td>
			<td>自我介绍</td>
			<td>根据考官指令，每位考生作一个简短的自我介绍。时间约1分钟。</td>
			<td>每位考生发言20秒</td>
		</tr>
		<tr>
			<td>Part2</td>
			<td>短文朗读</td>
			<td>考生准备45秒后朗读一篇120词左右的短文。时间约2分钟。</td>
			<td>每位考生朗读1分钟</td>
		</tr>
		<tr>
			<td>Part3</td>
			<td>简短回答</td>
			<td>考生回答2个与朗读短文有关的问题。时间约1分钟。</td>
			<td>每位考生发言40秒</td>
		</tr>
		<tr>
			<td>Part4</td>
			<td>个人陈述</td>
			<td>考生准备45秒后，根据所给提示作陈述。时间约2分钟。</td>
			<td>每位考生发言1分钟</td>
		</tr>
		<tr>
			<td>Part5</td>
			<td>两人互动</td>
			<td>考生准备1分钟后，根据设定的情景和任务进行交谈。时间约4分钟。</td>
			<td>两位考生互动3分钟</td>
		</tr>
	</tbody>
</table>
<h2>CET-SET6：</h2>
<table border="1" cellspacing="0">
	<tbody>
		<tr>
			<td>部 分</td>
			<td>内容</td>
			<td>考试过程</td>
			<td>答题时间</td>
		</tr>
		<tr>
			<td style="white-space:nowrap">Part 1</td>
			<td style="white-space:nowrap">自我介绍和问答</td>
			<td>先由考生自我介绍，然后回答考官提问。时间约2分钟。</td>
			<td>自我介绍：每位考生20秒回答问题：每位考生30秒</td>
		</tr>
		<tr>
			<td style="white-space:nowrap">Part 2</td>
			<td style="white-space:nowrap">陈述和讨论</td>
			<td>考生准备1分钟后，根据所给提示作个人陈述；两位考生就指定的话题讨论。时间约8分钟。</td>
			<td>个人陈述：每位考生1分30秒两人讨论：3分钟</td>
		</tr>
		<tr>
			<td style="white-space:nowrap">Part 3</td>
			<td style="white-space:nowrap">问答</td>
			<td>考生回答考官的一个问题。时间约1分钟。</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>
`
    })
    return (
        <>
            <p>CET口试每年开考两次，分别于5月和11月举行，具体考试时间我中心将会在每年年初另行通知。目前仅有英语开考对应级别的口试科目，即英语四级口语考试（CET-SET4）和英语六级口语考试（CET-SET6）。口语考试采用机考形式，凡已经报考笔试科目的考生均可报考对应级别的口试科目。</p>
            <h2>CET-SET4：</h2>
            <div ref={div}></div>
        </>
    )
})
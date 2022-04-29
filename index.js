const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');


async function genTag(tagName,filename){
    const dataUri = textToImage.generateSync(tagName,{
        debug: false,
        maxWidth: 22,
        fontSize: 10,
        fontFamily: 'Arial',
        lineHeight: 16,
        margin: 1,
        bgColor: '#c5c3c7',
        textColor: 'black',
      });
    ImageDataURI.outputFile(dataUri, filename+'.png');
}



async function genTagMedia(tagName,filename){
    const dataUri = textToImage.generateSync(tagName,{
        debug: false,
        maxWidth: 22,
        fontSize: 10,
        fontFamily: 'Arial',
        lineHeight: 16,
        margin: 1,
        bgColor: '#e1c6f5',
        textColor: 'black',
      });
    ImageDataURI.outputFile(dataUri, filename+'.png');
}


async function genTagPart(tagName,filename){
    const dataUri = textToImage.generateSync(tagName,{
        debug: false,
        maxWidth: 22,
        fontSize: 10,
        fontFamily: 'Arial',
        lineHeight: 16,
        margin: 1,
        bgColor: '#ccf5c6',
        textColor: 'black',
      });
    ImageDataURI.outputFile(dataUri, filename+'.png');
}


(async()=>{
    await genTag('通告','img/tonggao')    
    await genTag('公告','img/gonggao')    
    await genTag('通知','img/tongzhi')    
    await genTag('意见','img/yijian')    
    await genTag('决定','img/jueding')    
    await genTag('条例','img/tiaoli')    
    await genTag('细则','img/xize')    
    await genTag('办法','img/banfa')    
    await genTag('标准','img/biaozhun')    
    await genTag('须知','img/xuzhi')    
    await genTag('措施','img/cuoshi')    
    await genTag('解读','img/jiedu')    
    await genTag('解答','img/jieda')    
    await genTagMedia('访谈','img/fangtan')    
    await genTagMedia('报道','img/baodao')    
    await genTagMedia('报告','img/baogao')    
    await genTagMedia('宣传','img/xuanchuan')    
    await genTagPart('卫健','img/weijian')    
})()


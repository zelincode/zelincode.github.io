[TOC]

## 2019-07-20 06:43:35 [scrapy.spidermiddlewares.offsite] DEBUG: Filtered offsite request to 'www.budejie.com': <GET http://www.budejie.com/text/2>

原因：二级域名无法解析

解决方法:yield scrapy.Request(next_page,dont_filter="true") 打开dont_filter

## 无法启动pipeline

1. 没有开settings

2. pipelines里没有 from scrapy import Request 或者 from scrapy.pipelines.images import ImagesPipeline

3. ```python
   class ImagespiderPipeline(object) #没有继承ImagesPipeline
   class ImagespiderPipeline(ImagesPipeline) #
   ```

4. 主函数里面没有yield item


```python
#http://lab.scrapyd.cn/page/1/
page = response.url.split("/")[-2]	#取页面值
filename = 'mingyan-%s.html' % page	#   %
with open(filename, 'wb') as f:		#  打开文件
    f.write(response.body)    
self.log('保存文件: %s' % filename)  # 打日志

#下一页
next_page = response.css('li.next a::attr(href)').extract_first()  
        if next_page is not None: 
            next_page = response.urljoin(next_page)
            yield scrapy.Request(next_page, callback=self.parse)
            
tags = ','.join(tags)  # 数组转换为字符串
tag = getattr(self, 'tag', None)  # 获取tag值，也就是爬取时传过来的参数

FEED_EXPORT_ENCODING = 'utf-8' # -o输出在setting中设置默认参数
```

scrapy shell 调试

```shell
scrapy fetch http://www.scrapyd.cn >d:/3.html //用来检测是否被渲染了
```

![preview](https://pic4.zhimg.com/v2-0ec8d1bc8a040bfe10b95052b2175a7b_r.jpg)
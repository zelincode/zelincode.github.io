MapReduce——"分而治之"

相互之间不具有依赖关系

 大数据往往是一组重复的数据元素

---

## mapreduce的主要功能

客户端，编写mapreduce作业，配置和提交作业

jobTracker 初始化作业分配作业，通信，协调

tasktracker 

1. 数据划分和计算任务调度
   - job -> task分成多个数据块
   - task -> map and reduce 
2. 数据代码互定位
   - 尽可能靠近本地磁盘
   - 网络节点同样采取就近原则

1. 系统优化：

   实现负载均衡

   数据合并减少数据传输压力

   性能均衡

2. 出错检测和恢复（多备份）

---

## 运行详解

1. 客户端编写mapreduce
2. 提交job到jobtracker
3. 分配job的ID，检查输出目录是否存在，根据输入计算输入分片
4. JobTracker配置Job需要的资源
5. Job Tracker初始化作业，排队
6. 初始化job，创建job对象，以便Tracker追踪Job的工作状态
7. 作业调度器获取输入分片信息创建一个map任务
8. TaskTracker运行一个五秒的心跳机制，以便JobTracker检测TaskTracker是否存活
9. TaskTracker分片执行任务，同时向JobTracker汇报工作
10. 当JobTracker收到最后一个TaskTracker工作完成，就设置job工作完成
11. 如果job中途犯错，会有相应的机制处理，

---

MR运行阶段

1. 输入分片，在进行map计算时，把文件分片，输入分片并非数据本身，而是数据的起始位置和数据的长度

   （如果每个map执行行的数据大小不均匀，mapreduce会对其进行优化）

2. 执行map函数，由编程人员实现

3. map的输出为reduce的输入

4. combiner是可选的一个阶段，combiner是一个本地的reduce操作，它是map运算的后续步骤，可以使得map的输出文件变小（但是使用combiner是有风险的， 如果求最大最小和总数可以使用combiner，但求和的话可能就会出错）

5. shuffle阶段：将map的输出作为reduce的输入的过程（防止内存溢出）

   无法将大量数据放入内存，shuffle设置一个缓存区，如果缓存达到阈值内容就会被写到磁盘上，写的过程叫spill，另外的内存继续写入数据。如果缓存被撑满，会先写内容，内容写完后继续再读入内存。

   溢出文件随后会被合并

   **接下来还有一个过程——Partitioner（分区）**

6. reduce阶段

·
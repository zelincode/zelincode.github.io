[TOC]

## 环境配置

### maven对应jdk

![img](https://img-blog.csdn.net/20160218194045423?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

### JDK和JRE的区别

 JDK，开发java程序用的开发包，JDK里面有java的运行环境(JRE)，包括client和server端的。需要配置环境变量。。。。

JRE，运行java程序的环境，JVM，JRE里面只有client运行环境，安装过程中，会自动添加PATH。

### maven项目中的groupid和artifactId

groupid和artifactId被统称为“坐标”是为了保证项目唯一性而提出的，如果你要把你项目弄到maven本地仓库去，你想要找到你的项目就必须根据这两个id去查找。
　　groupId一般分为多个段，这里我只说两段，第一段为域，第二段为公司名称。域又分为org、com、cn等等许多，其中org为非营利组织，com为商业组织。举个apache公司的tomcat项目例子：这个项目的groupId是org.apache，它的域是org（因为tomcat是非营利项目），公司名称是apache，artigactId是tomcat。

##  基础知识：

### 四大引用类型



![1562980541860](C:\Users\weizelin\AppData\Roaming\Typora\typora-user-images\1562980541860.png)

### 强制类型转换：

![1562980549594](C:\Users\weizelin\AppData\Roaming\Typora\typora-user-images\1562980549594.png)

小数默认类型是double，想要转换需要在小数后面加上f或者F的后缀才能转换为float类型

### **方法的调用**：

1. 静态方法的调用：类名.方法名|属性名
2. 非静态方法的调用：对象名.方法名|属性名（需要实例化）

注意：类中的静态方法不能访问非静态成员

### **构造器**：（构造函数）

1. 每个类都有一个无参的构造器；
2. 构造器名必须和类名相同；
3. 构造器没有返回值

（通过new**关键词来调用构造器**）

### switch的作用类型

**switch** **可作用于char byte short int switch**

**可作用于char byte short int对应的包装类**

**switch不可作用于long double float boolean**
















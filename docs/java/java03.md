[TOC]

## package和import

## Java的常用包

java.lang包包含了Java语言的核心类，使用这个包的类无需使用import语句导入

## JavaBean规范

•**JavaBean ** **推荐的命名规范**

​	•**类名要首字母大写，后面的单词首字母大写**

​	•**方法名的第一个单词小写，后面的单词首字母大写**

​	•**变量名的第一个单词小写，后面的单词首字母大写**

## 继承

### 类的继承（extends）

子类获得所有父类非私有的属性和方法，Java的继承具有单继承的特点，但Java类可以有很多个间接父类。

父类的private属性子类不能访问

default是默认的包访问权限，任何和该类处于同一个包的类都能访问

protected必须是同出一一个包中的子类才能访问

### 方法的重写和重载

重写——两同两小一大

两同：方法名，形参列表

两小：子类返回类型应比父类返回类型更小或相等，抛出的异常应比父类方法声明抛出的异常更小或相等

一大：子类方法的访问权限应比父类方法更大或相等

## Super

用于调用父类中被子类覆盖的方法

super()运行父类的构造器，默认隐藏

java中所有的类都直接或间接得继承Object类

### 注意点

如果不想被子类方法重写，就将父类方法改成final修饰

## 多态

### 基础

java引用变量有两个类型，一个是编译时的类型，一个是运行时的类型，如果编译时类型和运行时类型不一致，就会出现多态。

多态的三个条件：

1. 继承
2. 重写
3. 父类引用指向子类对象（强制类型转化，向上转型）向下转型报错只能强制转化

Instanceof 

## 单例类

```java
public class Student{
	private static Student s = new Student();
    private Student(){}
    public static Student getInstance(){
        return s;
    }
}	//饿汉式单例		耗内存
```

```java
public class Teacher{
	private static teacher = null;
    private Teacher(){}
    public static synchronized Teacher getInstance(){
        synchronized(Teacher.class){
            if(teacher == null)
            return teacher = new Teacher();
        else
            return teacher;
        }  
    }
}	//懒汉式单例		存在线程安全问题
```




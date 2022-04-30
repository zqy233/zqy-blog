# SpringBoot

## 1.java背景知识

### 1.1.java语言发展史

java语言是美国sun（stanford university network）公司在1995年推出的计算机语言


### 1.2.java语言跨平台

java程序针对不同平台使用不同jvm（java虚拟机），可以在任意平台（操作系统）运行

### 1.3.jre和jdk

jre是java运行时环境（java runtime environment），包括jvm和运行时所需要的核心类库

jdk是java程序开发工具包（java development Kit）,包含jre和开发人员使用工具，编译工具javac.exe,运行工具java.exe


## 2.下载安装jdk1.8/maven3.3+（选择3.6.1）

jdk1.8又称java8，java程序开发工具包

### 2.1 下载后点击启动jdk的exe安装文件，配置环境变量

新建系统变量，JAVA_HOME，E:\java\jdk1.8.0_152

path中添加%JAVA_HOME%\bin，%JAVA_HOME%\jre\bin

cmd输入java和javac说明配置成功

### 2.2 jdk目录


### 2.3 jdk1.8要求maven3.3+

新建系统变量，MAVEN_HOME，E:\java\apache-maven-3.6.3

path中添加%MAVEN_HOME%\bin

cmd输入mvn -v说明配置成功

## 3.常用doms命令


## 4.基础语法

### 4.1 关键字

### 4.2 常量

字符串双引号 整数 小数 字符单引号 布尔 空常量null

### 4.3 数据类型

计算机存储设备的最小信息单元叫"位"（bit），又叫比特位，用"b"表示，计算机最小存储单元叫"字节（byte）"，用"B"表示，字节是由8个连续的位组成。

1B=0bit

1KB = 1024B

1MB = 1024KB

1GB = 1024MB

1TB = 1024GB


### 4.4 变量

变量类型 变量名 = 变量值

变量名不能重复

变量未赋值，不能使用

long类型默认为int，需要末尾加L

float类型默认为double，需要末尾加F

```java
long i = 100000000000000L;
float i = 13.22F;
```

### 4.5 标识符

由数字字母_$组成

不能数字开头，不能是关键字，区分大小写

变量方法小驼峰  类大驼峰

### 4.6 自动类型转换

java程序最基本的组成单位是类

main方法是程序的入口方法，程序的执行是从main方法开始的


### 4.7 强制类型转换

存在精度丢失问题，不体检使用

### 4.8 字符

'A'  65  

'a' 97

'0' 48

### 4.9 .算数运算符

'+'从左至右

## 5.设置maven settings.xml

```xml
<mirrors>
    <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>central</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
</mirrors>
<profiles>
  <profile>
    <id>jdk-1.8</id>
    <activation>
    <activeByDefault>true</activeByDefault>
      <jdk>1.8</jdk>
    </activation>
  <properties>
  	<maven.compiler.source>1.8</maven.compiler.source>
  	<maven.compiler.target>1.8</maven.compiler.target>
    <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
  </properties>
</profile>
```

## 6. 使用spring boot

### 6.1 设置pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>hello</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.4.RELEASE</version>
    </parent>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

### 6.2  写一个main函数

main

```java
package com.atguigu.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MainAppliation {
    public static void main(String[] args) {
        SpringApplication.run(MainAppliation.class,args);
    }
}
```

### 6.3 写一个controller

```java
package com.atguigu.boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@ResponseBody
//@Controller
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String handle(){
        return "hello spring boot";
    }
}
```

### 6.4 设置端口

resources下新建文件application.properties

```
server.port=8888
```

### 6.5 启动项目

ctrl+shift+f10 或者 点击右上方三角按钮

### 6.6 打包

idea右侧 选择maven>Lifrcycle>package

按住ctrl可以多选


### 6.7 target下会生成SHAPSHOT.jar

直接cmd运行jar包跟运行项目是一样的效果

## 7.快速生成语句

psvm main方法

sout 输出

## 8.SpringBoot

MVC（模型-视图-控制器）

throws Exception表示的是本方法不处理异常



```
                  AreaEntity  //server.cd.dto.common
                  GkArae //server.cd.dto.common.model
                  BaseEntity //server.cd.dto.common
                  Serializable //java.io
```

### 8.1 interface

定义接口，接口的意义在于暂时先不实现具体，class继承后进行具体实现

### 8.2 class

class类可以继承接口

class类可以new一个实例

```java
class类名 实例对象名 = new class类名();
```

### 8.3  implements 和extends的区别

extends 是继承某个类, 继承之后可以使用父类的方法, 也可以重写父类的方法; 

implements 是实现多个接口, 接口的方法一般为空的, 必须重写才能使用

### 8.4 Serializable

序列化接口

#### 8.5 @Autowired

​    自动装配，告诉spring去查找相应类型

　在启动spring IoC时，容器自动装载了一个AutowiredAnnotationBeanPostProcessor后置处理器，当容器扫描到@Autowied、@Resource(是CommonAnnotationBeanPostProcessor后置处理器处理的)或@Inject时，就会在IoC容器自动查找需要的bean，并装配给该对象的属性

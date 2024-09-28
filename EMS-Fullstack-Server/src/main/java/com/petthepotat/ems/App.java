package com.petthepotat.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello world!
 *
 */

@SpringBootApplication
public class App
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World! Starting Program:" );
        SpringApplication.run(App.class, args);
    }
}

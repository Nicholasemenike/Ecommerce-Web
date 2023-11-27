package net.admin.Item;

import java.util.Date;

import lombok.Data;

@Data
public class Item {
    
    private Long id;
    private double price;
    private byte[] image;
    private String name;
    private String features;
    private String description;
    private String model;
    private Date date;
}

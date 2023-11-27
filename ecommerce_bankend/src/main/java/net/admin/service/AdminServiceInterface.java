package net.admin.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import net.admin.Item.Item;
import net.model.User;

public interface AdminServiceInterface {
    
    ResponseEntity<String> changePrice(Item item);

    ResponseEntity<String> changeModel(Item item);

    ResponseEntity<String> changeImage(Item item);

    ResponseEntity<String> changeFeatures(Item item);

    ResponseEntity<String> changeDescription(Item item);

    ResponseEntity<String> deleteItem(Item item);

    ResponseEntity<List<User>> getAllUsers();
}

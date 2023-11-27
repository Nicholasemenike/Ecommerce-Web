package net.admin.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import net.admin.Item.Item;
import net.admin.service.ItemService;

@RestController
@RequestMapping(path = "/api/v1/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ItemService itemService;

    @GetMapping("/item/{}")
    public List<?> getAllItems(@PathVariable Item item){
        return itemService.getItems(item);
    }

    @PutMapping("/item/price/{item}")
    public ResponseEntity<?> changeItemPrice(@PathVariable Item item){
        return itemService.changePrice(item);
    }


}

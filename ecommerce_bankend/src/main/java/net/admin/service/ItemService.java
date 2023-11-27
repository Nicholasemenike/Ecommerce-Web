package net.admin.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import net.admin.Item.Item;
import net.model.User;
import net.repository.CapRepository;
import net.repository.ClothRepository;
import net.repository.ShoeRepository;
import net.repository.WatchRepository;
import net.user.repo.UserRepository;

@Service
@RequiredArgsConstructor
public class ItemService implements AdminServiceInterface {

    private final CapRepository capRepository;
    private final UserRepository userRepository;
    private final WatchRepository watchRepository;
    private final ClothRepository clothRepository;
    private final ShoeRepository shoeRepository;

    @Override
    public ResponseEntity<String> changePrice(Item item) {
        if(item.getName().equals("cap")){
            var cap = capRepository.findById(item.getId()).get();
            capRepository.changeCapPrice(cap.getId(), item.getPrice());
        }else if (item.getName().equals("shoe")) {
            var shoe = shoeRepository.findById(item.getId()).get();
            shoeRepository.changeShoePrice(shoe.getId(), item.getPrice());
        }else if (item.getName().equals("watch")) {
            var watch = watchRepository.findById(item.getId()).get();
            watchRepository.changeShoePrice(watch.getId(), item.getPrice());
        }else if (item.getName().equals("cloth")) {
            var cloth = clothRepository.findById(item.getId()).get();
            clothRepository.changeShoePrice(cloth.getId(), item.getPrice());
        }
        return ResponseEntity.ok("Success");
    }

    @Override
    public ResponseEntity<String> changeModel(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeModel'");
    }

    @Override
    public ResponseEntity<String> changeImage(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeImage'");
    }

    @Override
    public ResponseEntity<String> changeFeatures(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeFeatures'");
    }

    @Override
    public ResponseEntity<String> changeDescription(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeDescription'");
    }

    @Override
    public ResponseEntity<String> deleteItem(Item item) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteItem'");
    }

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllUsers'");
    }

    public List<?> getItems(Item item) {
        if(item.getName().equals("user")){
            return userRepository.findAll();
        }else if (item.getName().equals("cap")) {
            return capRepository.findAll();
        } else if (item.getName().equals("shoe")) {
            return shoeRepository.findAll();
        }else if (item.getName().equals("watch")) {
            return watchRepository.findAll();
        }else{
            return clothRepository.findAll();
        }
    }
    

}
